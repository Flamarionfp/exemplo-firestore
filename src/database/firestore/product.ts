import { ProductRepository } from '@/repositories/product';
import { Product } from '@/entities/product';
import { ProductProps } from '@/types/product';
import { firestoreDB } from '.';
export class FirestoreProductRepository implements ProductRepository {
  create = async (product: Product): Promise<void> => {
    await firestoreDB.collection('products').add({
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      imageUrl: product.imageUrl,
    });
  };

  get = async (): Promise<ProductProps[]> => {
    const products: ProductProps[] = [];
    const productsSnapshot = await firestoreDB.collection('products').get();

    productsSnapshot.forEach((productSnapshot) => {
      const productProps = productSnapshot.data() as ProductProps;

      products.push(productProps);
    });

    return products;
  };
}
