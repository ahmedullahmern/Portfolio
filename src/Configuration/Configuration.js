import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDHryaqGxfFXNCkFFhZagTK_2-ZFvJe668",
    authDomain: "portfolio-a2719.firebaseapp.com",
    projectId: "portfolio-a2719",
    storageBucket: "portfolio-a2719.appspot.com",
    messagingSenderId: "667117025117",
    appId: "1:667117025117:web:c1c3f85c7e15a330ce1ab4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);
const db = getFirestore(app);



export { messaging, db }