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

// // Database functions

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
    console.log(data);
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

// export function
