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

export function getInvoices(userId, invoiceId) {
  const userRef = ref(db, `users/${userId}/invoices/${invoiceId}`);
  onValue(userRef, snapshot => {
    const data = snapshot.val();
    console.log(data);
  });
}

export function deleteInvoice(userId, invoiceId) {
  set(ref(db, `users/${userId}/invoices/${invoiceId}`), null);
}
// export function
