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



export default class EmployeeApi {
  
  static async getAllEmployees() {
    const a = [];

    const snapshot = await db.collection("employees").get();
    snapshot.forEach((doc)=> {
      a.push({ ...doc.data(), id:doc.id });
    }); 
    
    return new Promise(function(resolve, reject) {
      resolve(a);
    });
  }
    
  static async getEmployee(empId) {
    let data = {};
    const doc = await db.collection("employees").doc(empId).get();
    if (doc.exists){
      data = doc.data();
    }

    data.id = empId;

    return new Promise(function(resolve, reject) {
      resolve(data);
    });
  
  }

  static saveEmployee(employee) {
    //employee = {...employee}; // spread to clone object
                              //to avoid manipulating original employee.

    // Simulate server-side validation
    const minEmpNameLength = 3;
    if (employee.firstName.length < minEmpNameLength) {
      throw new Error(`First Name must be at least ${minEmpNameLength} characters.`);
    }

    if (employee.lastName.length < minEmpNameLength) {
      throw new Error(`Last Name must be at least ${minEmpNameLength} characters.`);
    }
     
    if (employee.id) { //if id, update 
      return  db.collection("employees").doc(employee.id).update(employee);
    } else { //if no id, create employee
      return db.collection("employees").add(employee);
    }
    
  }

  static deleteEmployee(empId) {
    return db.collection("employees").doc(empId).delete();
  }

  // static async getAllEmployees() {
  //   const resp = await fetch("/employees");
  //   if(resp.ok) {
  //     return resp.json();
  //   }
  //   throw new Error('Network response was not ok.'); 
  // }


}