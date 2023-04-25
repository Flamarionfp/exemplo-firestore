import { Firebase } from '../../config/firebase';

export class FirestoreDatabase {
  private instance: FirebaseFirestore.Firestore;

  constructor() {
    const firebase = new Firebase();

    this.instance = firebase.getFirestore();
  }

  getInstance(): FirebaseFirestore.Firestore {
    return this.instance;
  }
}
