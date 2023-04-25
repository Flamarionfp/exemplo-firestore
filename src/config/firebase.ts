import * as admin from 'firebase-admin';
const serviceAccount = require('../../serviceAccountKey.json');
export class Firebase {
  private app: admin.app.App;

  constructor() {
    this.app = admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  public getApp(): admin.app.App {
    return this.app;
  }

  public getFirestore() {
    return this.app.firestore();
  }
}
