import './ContactTypes';
import { firestore as db } from '../../../common/firebase';

// db.collection("contacts").add({
//   firstName: "Ada",
//   lastName: "Lovelace"
// })
// .then(function(docRef) {
//   console.log("Document written with ID: ", docRef.id);
// })
// .catch(function(error) {
//   console.error("Error adding document: ", error);
// });

export default class ContactApi {
  static unsubscribe = null;

  static subscribeChangeNotification(onChange) {
    ContactApi.unsubscribe = db.collection('contacts').onSnapshot((snap) => {
      snap.docChanges().forEach((change) => {
        if (
          change.type === 'added' ||
          change.type === 'modified' ||
          change.type === 'deleted'
        ) {
          onChange(change);
        }
      });
    });
  }

  static unsubscribeChangeNotification() {
    ContactApi.unsubscribe();
  }

  static async getAllContacts() {
    const a = [];

    const snapshot = await db.collection('contacts').get();

    snapshot.forEach((doc) => {
      a.push({ ...doc.data(), id: doc.id });
    });

    return new Promise(function (resolve, reject) {
      resolve(a);
    });
  }

  static async getContact(contactId) {
    let data = {};
    const doc = await db.collection('contacts').doc(contactId).get();
    if (doc.exists) {
      data = doc.data();
    }

    data.id = contactId;

    return new Promise(function (resolve, reject) {
      resolve(data);
    });
  }

  static saveContact(contact) {
    // Simulate server-side validation
    const minContactLength = 3;
    if (contact.firstName.length < minContactLength) {
      throw new Error(
        `First Name must be at least ${minContactLength} characters.`
      );
    }

    if (contact.lastName.length < minContactLength) {
      throw new Error(
        `Last Name must be at least ${minContactLength} characters.`
      );
    }

    if (contact.id) {
      //if id, update
      return db
        .collection('contacts')
        .doc(contact.id)
        .update(filterProps(contact, ([key, value]) => key !== 'id'));
    } else {
      //if no id, create contact
      contact.id = null;
      return db.collection('contacts').add(contact);
    }
  }

  static deleteContact(contactId) {
    return db.collection('contacts').doc(contactId).delete();
  }
}

function filterProps(obj, predicate) {
  return Object.fromEntries(Object.entries(obj).filter(predicate));
}
