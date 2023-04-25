import { ProductRepository } from '@/repositories/product';

export class GetProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  execute = async () => {
    const products = await this.productRepository.get();

    return products;
  };
}
