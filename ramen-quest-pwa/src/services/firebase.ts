import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebaseプロジェクトの設定（表示されたやつそのまま）
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
  };
  

// ✅ ここが抜けてた！
export const firebaseApp = initializeApp(firebaseConfig);

// Firestoreのエクスポート
export const db = getFirestore(firebaseApp);
