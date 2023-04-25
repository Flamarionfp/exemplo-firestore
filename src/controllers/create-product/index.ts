import { CreateProductService } from '@/services/create-product/create-product';
import { CreateProductController } from './create-product';
import { FirestoreProductRepository } from '@/database/firestore/product';

const firestoreProductRepository = new FirestoreProductRepository();
const createProductService = new CreateProductService(
  firestoreProductRepository,
);
const createProductController = new CreateProductController(
  createProductService,
);

export { createProductController };
