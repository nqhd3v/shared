import { TDataValue } from "@/types/firebase";
import { FirebaseApp } from "firebase/app";
import {
  CollectionReference,
  Firestore,
  getFirestore,
  collection as coll,
  doc,
  DocumentReference,
  setDoc,
  addDoc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { ERROR_MAPPING } from "../error";

class FirebaseClientFirestore<TInput extends TDataValue, TOutput> {
  firestore: Firestore;
  collection: (...pathSegments: string[]) => CollectionReference;
  document: (...pathSegments: string[]) => DocumentReference;

  constructor(firebaseApp: FirebaseApp, collection: string) {
    this.firestore = getFirestore(firebaseApp);
    this.collection = (...pathSegments) =>
      coll(this.firestore, collection, ...pathSegments);
    this.document = (...pathSegments) =>
      doc(this.firestore, collection, ...pathSegments);
  }

  async create(
    data: TInput,
    docId?: string,
    collectionPath: string[] = []
  ): Promise<TOutput> {
    if (docId) {
      const isExisted = await this.isExistById(...[...collectionPath, docId]);
      if (isExisted) {
        throw new Error(ERROR_MAPPING.EXISTED);
      }

      const newItemWithId = await setDoc(
        this.document(...[...collectionPath, docId]),
        data,
        { merge: true }
      );
      return newItemWithId as TOutput;
    }
    const newItem = await addDoc(this.collection(...collectionPath), data);
    const newItemDoc = await getDoc(newItem);
    return newItemDoc.data() as TOutput;
  }

  async update(
    data: Partial<TInput>,
    ...pathSegments: string[]
  ): Promise<TOutput | null> {
    const isExist = await this.isExistById(...pathSegments);
    if (!isExist) throw new Error(ERROR_MAPPING.NOT_EXISTED);

    await setDoc(this.document(...pathSegments), data, { merge: true });
    return await this.getOne(...pathSegments);
  }

  async getOne(...pathSegments: string[]): Promise<TOutput | null> {
    const docById = await getDoc(this.document(...pathSegments));

    if (!docById.exists()) {
      throw new Error(ERROR_MAPPING.NOT_EXISTED);
    }
    return docById.data() as TOutput;
  }

  async deleteById(...pathSegments: string[]): Promise<boolean> {
    const isExist = await this.isExistById(...pathSegments);
    if (!isExist) throw new Error(ERROR_MAPPING.NOT_EXISTED);

    await deleteDoc(this.document(...pathSegments));
    return true;
  }

  private async isExistById(...pathSegments: string[]): Promise<boolean> {
    const current = await this.getOne(...pathSegments);
    return !!current;
  }
}

export default FirebaseClientFirestore;
