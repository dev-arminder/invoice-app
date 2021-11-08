import { getDatabase, ref, set, onValue, get, child } from "firebase/database";

const db = getDatabase();

// // Database functions

// Read User data
export function readUserData(id, updateState) {
  const userRef = ref(db, "users/" + id);
  onValue(userRef, snapshot => {
    const data = snapshot.val();
    updateState(snapshot.val());
  });
}

// export function readUserData(id) {
//   const dbRef = ref(getDatabase());
//   let val;
//   get(child(dbRef, `users/${id}`))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         val = snapshot.val();
//       } else {
//         console.log("No data available");
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   console.log(val);
// }

// Write user data to database
export function writeUserData(id, email) {
  set(ref(db, "users/" + id), {
    id: id,
    email: email
  });
}
