import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyAKDS8BM9MWwRA2PYgyqd3BpfRE0GyjULk',
  //authDomain: '### FIREBASE AUTH DOMAIN ###',
  projectId: 'test-10929'
});

const db = firebase.firestore();

// db.collection("employees").add({
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
  static async getAllContacts() {
    const a = [];

    const snapshot = await db.collection('employees').get();
    snapshot.forEach(doc => {
      a.push({ ...doc.data(), id: doc.id });
    });

    return new Promise(function(resolve, reject) {
      resolve(a);
    });
  }

  static async getContact(contactId) {
    let data = {};
    const doc = await db
      .collection('employees')
      .doc(contactId)
      .get();
    if (doc.exists) {
      data = doc.data();
    }

    data.id = contactId;

    return new Promise(function(resolve, reject) {
      resolve(data);
    });
  }

  static saveContact(contact) {
    //employee = {...employee}; // spread to clone object
    //to avoid manipulating original employee.

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
        .collection('employees')
        .doc(contact.id)
        .update(contact);
    } else {
      //if no id, create employee
      return db.collection('employees').add(contact);
    }
  }

  static deleteContact(contactId) {
    return db
      .collection('employees')
      .doc(contactId)
      .delete();
  }

  // static async getAllEmployees() {
  //   const resp = await fetch("/employees");
  //   if(resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('Network response was not ok.');
  // }
}
