import { addDoc, collection, deleteDoc, doc , getFirestore, onSnapshot, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyASXf_7sHYSfDzEzM2WwLkpfcB9yCrRAYk",
    authDomain: "fir-29d87.firebaseapp.com",
    projectId: "fir-29d87",
    storageBucket: "fir-29d87.firebasestorage.app",
    messagingSenderId: "366437650176",
    appId: "1:366437650176:web:55a90364b3f94ed2182de5",
    measurementId: "G-95BV9EY3BX"
  };

  const initapp=initializeApp(firebaseConfig);
  const app=getFirestore(initapp)
  const db=collection(app,'sd')

  export async function create(data)
  {
    return await addDoc(db,data)
  }

  
  export function read(callback)
  {
    const unsubscribe = onSnapshot(db, (snapshot) => {
      const result = snapshot.docs.map((doc) => ({
        id:doc.id,...doc.data(), 
      }));
      callback(result); 
    });
  
    return unsubscribe;

  }

  export async  function updatedoc(id,data) {
    // console.log(id,data)
    const docref=doc(db,id)
    return await setDoc(docref,data)
  }

  export async  function deletedoc(id) {
    const docref=doc(db,id)
    return await deleteDoc(docref)
  }
