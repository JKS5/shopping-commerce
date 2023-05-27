// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get, set, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase();
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
        // console.log(snapshot.val());
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

export async function addNewProduct(product, imageUrl) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image: imageUrl,
    options: product.options.split(","),
  });
}

export async function getProducts() {
  return get(ref(database, "products")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function getCart(userId) {
  return get(ref(database, `carts/${userId}`)) //
    .then((snapshot) => {
      const items = snapshot.val() || {};
      // console.log(`snapshot: ${snapshot}`);
      // console.log(`snapshot.val() : ${snapshot.val()}`);
      return Object.values(items);
    });
}

export async function addOrUpdateToCart(userId, product) {
  return set(ref(database, `carts/${userId}/${product.id}`), product);
}

export async function removeFromCart(userId, productId) {
  return remove(ref(database, `carts/${userId}/${productId}`));
}
// export async function removeCart(){

// }
