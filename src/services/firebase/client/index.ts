// Import the functions you need from the SDKs you need
import { IFirebaseConf, TDataValue } from "@/types/firebase";
import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { extname } from "path";
import { v4 } from "uuid";
import FirebaseClientFirestore from "./firestore";

class FirebaseClient {
  firebase: FirebaseApp;
  constructor({ projectId, ...conf }: IFirebaseConf) {
    this.firebase = initializeApp({
      ...conf,
      authDomain: `${projectId}.firebaseapp.com`,
      storageBucket: `${projectId}.appspot.com`,
    });
  }

  getApp(): FirebaseApp {
    return this.firebase;
  }

  getFirestore(): Firestore {
    return getFirestore(this.firebase);
  }

  firestore<TInput extends TDataValue, TOutput>(collection: string) {
    return new FirebaseClientFirestore<TInput, TOutput>(
      this.firebase,
      collection
    );
  }

  async upload(file: File, parent = "nqh") {
    const ext = extname(file.name);
    const id = v4();
    const storage = getStorage();
    const storageRef = ref(storage, `${parent}/${id}${ext}`);

    try {
      // 'file' comes from the Blob or File API
      const snapshot = await uploadBytes(storageRef, file);
      return snapshot.ref.name;
    } catch (err: any) {
      console.error(err.message);
      return null;
    }
  }
}

export default FirebaseClient;
