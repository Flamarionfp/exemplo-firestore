import { GetProductsService } from '@/services/get-products/get-products';
import { GetProductsController } from './get-products';
import { FirestoreProductRepository } from '@/database/firestore/product';

const firestoreProductRepository = new FirestoreProductRepository();
const getProductsService = new GetProductsService(firestoreProductRepository);
const getProductsController = new GetProductsController(getProductsService);

export { getProductsController };
