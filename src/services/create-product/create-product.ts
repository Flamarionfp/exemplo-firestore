import { Product } from '@/entities/product';
import { ProductRepository } from '@/repositories/product';
import { ProductProps } from '@/types/product';

export class CreateProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  execute = async (data: ProductProps) => {
    const product = new Product(data);

    await this.productRepository.create(product);
  };
}
