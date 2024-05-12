import { IFirebaseServiceAccount, TDataValue } from "@/types/firebase";
import * as admin from "firebase-admin";
import { FirebaseFirestore } from "./firestore";

class FirebaseServer {
  firebase: admin.app.App;
  db: admin.firestore.Firestore;
  constructor(
    {
      projectId,
      privateKeyId,
      privateKey,
      clientEmail,
      clientId,
      authProviderX509CertURL,
      authURI,
      tokenURI,
      universeDomain,
      clientX509CertURL,
    }: IFirebaseServiceAccount,
    name: string
  ) {
    const appInitialized = admin.apps.find((a) => a && a.name === name);
    const firebaseConfig = {
      type: "service_account",
      project_id: projectId,
      private_key_id: privateKeyId,
      private_key: privateKey,
      client_email: clientEmail,
      client_id: clientId,
      auth_uri: authURI,
      token_uri: tokenURI,
      auth_provider_x509_cert_url: authProviderX509CertURL,
      client_x509_cert_url: clientX509CertURL,
      universe_domain: universeDomain,
    } as admin.ServiceAccount;

    this.firebase = appInitialized
      ? appInitialized
      : admin.initializeApp(firebaseConfig);
    this.db = this.firebase.firestore();
  }

  firestore<TInput extends TDataValue, TOutput>(collection: string) {
    return new FirebaseFirestore<TInput, TOutput>(this.db, collection);
  }

  getApp(): admin.app.App {
    return this.firebase;
  }
  getFirestore(): admin.firestore.Firestore {
    return this.db;
  }
}
export default FirebaseServer;
