import { ProductRepository } from '@/repositories/product';

export class GetProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  execute = async () => {
    const products = await this.productRepository.get();

    if (products?.length === 0) throw new Error('Products not found');

    return products;
  };
}
