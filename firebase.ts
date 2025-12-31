import * as firebaseApp from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDE67MUA6wxz1gCAJgdMzcr90y41rotX9E",
  authDomain: "umar-site.firebaseapp.com",
  projectId: "umar-site",
  storageBucket: "umar-site.firebasestorage.app",
  messagingSenderId: "175083330208",
  appId: "1:175083330208:web:091dc36d258d70a18f07c5",
  measurementId: "G-59N9ZH956W"
};

// Initialize Firebase
// Fixed: Use namespace import to resolve missing exported member error in some TypeScript configurations
const app = firebaseApp.initializeApp(firebaseConfig);

// Initialize Analytics Safely
export const analyticsPromise = isSupported().then(yes => yes ? getAnalytics(app) : null);

export { app };