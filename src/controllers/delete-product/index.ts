import { FirestoreProductRepository } from '@/database/firestore/product';
import { DeleteProductService } from '@/services/delete-product/delete-product';
import { DeleteProductController } from './delete-product';

const firestoreProductRepository = new FirestoreProductRepository();
const deleteProductService = new DeleteProductService(
  firestoreProductRepository,
);
const deleteProductController = new DeleteProductController(
  deleteProductService,
);

export { deleteProductController };
