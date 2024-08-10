import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC35bUvwpz7q73qIbAm0mtBrPs91hMw_YI",
    authDomain: "code-fury-hackathon.firebaseapp.com",
    projectId: "code-fury-hackathon",
    storageBucket: "code-fury-hackathon.appspot.com",
    messagingSenderId: "35573337737",
    appId: "1:35573337737:web:b15183ada1cbbcd46e4058"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  export const signInWithGoogle=async()=>{
    try{
      await signInWithPopup(auth,provider);
    }catch(error){
      console.log(error);
    }
  }
  
  export const signOutUser = async()=>{
    try{
      await signOut(auth);
    }catch(e){
      console.log('error signing out',e);
    }
  }