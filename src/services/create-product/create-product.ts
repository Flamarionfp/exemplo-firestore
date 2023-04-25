import { Product } from '@/entities/product';
import { ProductRepository } from '@/repositories/product';
import { ProductProps } from '@/types/product';
import { randomUUID } from 'crypto';

export class CreateProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  execute = async (data: ProductProps) => {
    const product = new Product({
      ...data,
      id: randomUUID(),
    });

    await this.productRepository.create(product);
  };
}
