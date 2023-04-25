import { Product } from '@/entities/product';
import { ProductProps } from '@/types/product';

export interface ProductRepository {
  create: (product: Product) => Promise<void>;
  get: () => Promise<ProductProps[]>;
  delete: (id: string) => Promise<void>;
}
