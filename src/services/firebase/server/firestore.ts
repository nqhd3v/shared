import { TDataValue } from "@/types/firebase";
import * as admin from "firebase-admin";

export class FirebaseFirestore<TInput extends TDataValue, TOutput> {
  db: admin.firestore.Firestore;
  collection: admin.firestore.CollectionReference;

  constructor(firestore: admin.firestore.Firestore, collection: string) {
    this.db = firestore;
    this.collection = firestore.collection(collection);
  }

  getCollection(): admin.firestore.CollectionReference {
    return this.collection;
  }

  async create(data: TInput, docId?: string): Promise<TOutput> {
    if (docId) {
      await this.collection.doc(docId).set(data);
      const newItemWithId = await this.collection.doc(docId).get();
      return newItemWithId.data() as TOutput;
    }
    const newItem = await this.collection.add(data);
    const createdItem = await newItem.get();
    return createdItem.data() as TOutput;
  }

  async update(data: Partial<TInput>, docId: string): Promise<TOutput | null> {
    const current = await this.getById(docId);
    if (!current) return null;

    await this.collection.doc(docId).set(data, { merge: true });
    return await this.getById(docId);
  }

  async getById(docId: string): Promise<TOutput | null> {
    const docById = await this.collection.doc(docId).get();

    if (docById.exists) return docById.data() as TOutput;
    return null;
  }

  async deleteById(docId: string): Promise<boolean> {
    const current = await this.getById(docId);
    if (!current) return false;

    await this.collection.doc(docId).delete();
    return true;
  }
}
