import {
  getDatabase,
  ref,
  set,
  onValue,
  get,
  child,
  push,
  update
} from "firebase/database";

const db = getDatabase();

// Read User data
export function readUserData(id, updateState, updateInvoices) {
  const userRef = ref(db, "users/" + id);
  onValue(userRef, snapshot => {
    const data = snapshot.val();
    updateState(data);
    const invoices = [];

    for (let key in data.invoices) {
      invoices.push({ ...data.invoices[key], id: key });
    }
    updateInvoices(invoices);
  });
}

// Write user data to database
export function writeUserData(id, email) {
  set(ref(db, "users/" + id), {
    id: id,
    email: email
  });
}

// Add Invoice in User's section

export function addInvoice(id, invoiceData) {
  const db = getDatabase();
  const postListRef = ref(db, `users/${id}/invoices`);
  const newPostRef = push(postListRef);
  set(newPostRef, invoiceData);
}

// export function getInvoices(userId, invoiceId, updateState) {
//   const userRef = ref(db, `users/${userId}/invoices/${invoiceId}`);
//   onValue(userRef, snapshot => {
//     const data = snapshot.val();
//     updateState(data);
//   });
// }

export function getInvoices(userId, invoiceId, updateState) {
  const userRef = ref(db, `users/${userId}/invoices/${invoiceId}`);
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/${userId}/invoices/${invoiceId}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        updateState(snapshot.val());
      } else {
        alert("No data available");
      }
    })
    .catch(error => {
      console.error(error);
    });
  // const url =
  //   process.env.REACT_APP_FIREBASE_DATABASE_URL +
  //   "users/" +
  //   userId +
  //   "/invoices/" +
  //   invoiceId;
  //   fetch(url)
  //   .then(data => {
  //     return data.json();
  //   })
  //   .then(invoice => {
  //     console.log(invoice);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
}

export function deleteInvoice(userId, invoiceId) {
  set(ref(db, `users/${userId}/invoices/${invoiceId}`), null);
}
// export function
