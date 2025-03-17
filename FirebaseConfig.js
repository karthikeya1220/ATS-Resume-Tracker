// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZFETF1t_h5CfT_xBt94U3WmQfWzNObo8",
  authDomain: "ats-checker-ba0fd.firebaseapp.com",
  projectId: "ats-checker-ba0fd",
  storageBucket: "ats-checker-ba0fd.firebasestorage.app",
  messagingSenderId: "529592921344",
  appId: "1:529592921344:web:768b73e4c20eb1d8d697e5",
  measurementId: "G-SYCJ0E2774"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth , app};