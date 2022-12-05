// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_BUCKET,
  messagingSenderId: process.env.VUE_APP_MSG_ID,
  appId: process.env.VUE_APP_APP_ID
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const perf = getPerformance(app);

export {perf}