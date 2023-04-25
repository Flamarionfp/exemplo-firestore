import { ProductRepository } from '@/repositories/product';

export class DeleteProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  execute = async (id: string) => {
    await this.productRepository.delete(id);
  };
}
