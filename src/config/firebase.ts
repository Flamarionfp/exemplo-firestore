import { app, initializeApp } from 'firebase-admin';

export class Firebase {
  private app: app.App;

  constructor() {
    const firebaseConfig = {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDERID,
      appId: process.env.APP_ID,
    };

    this.app = initializeApp(firebaseConfig);
  }

  public getApp(): app.App {
    return this.app;
  }

  public getFirestore() {
    return this.app.firestore();
  }
}
