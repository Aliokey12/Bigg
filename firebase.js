// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export default function firebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyB9YAAQ6zNGJKoHcmvPt_lbc-aNzKNm4oE",
        authDomain: "bigg-5f7eb.firebaseapp.com",
        projectId: "bigg-5f7eb",
        storageBucket: "bigg-5f7eb.appspot.com",
        messagingSenderId: "808724438908",
        appId: "1:808724438908:web:2aa32d41a9ae4e29870ef9",
        measurementId: "G-5JS0BDM22L"
      };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  return (
    <div>firebase</div>
  )
}
