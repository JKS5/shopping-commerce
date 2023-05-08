// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const database = getDatabase();
const dbRef = ref(getDatabase());

export function login() {
  provider.setCustomParameters({
    prompt: "select_account",
  });
  signInWithPopup(auth, provider).catch(console.error);
}

export async function logout() {
  signOut(auth).catch(console.error);
}
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    // 로그아웃 할때 빼고는 null인 경우가 없다.
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}
// export function onUserStateChange(callback) {
//   onAuthStateChanged(auth, async (user) => {
//     user && adminUser(user);
//     callback(user);
//   });
// }

async function adminUser(user) {
  return get(child(dbRef, `admins`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        console.log(snapshot.val());
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      } else {
        console.log("No Admin");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}
