import { ProductRepository } from '@/repositories/product';
import { FirestoreDatabase } from '.';
import { Product } from '@/entities/product';

export class FirestoreProductRepository implements ProductRepository {
  private db: FirebaseFirestore.Firestore;

  constructor() {
    const firestore = new FirestoreDatabase();
    this.db = firestore.getInstance();
  }

  create = async (product: Product) => {
    await this.db.collection('products').add({
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    });
  };
}
