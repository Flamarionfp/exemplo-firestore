import { ProductProps } from '@/types/product';

export class Product {
  private props: ProductProps;

  constructor(productData: ProductProps) {
    this.props = productData;
  }

  get id(): string {
    return this.props.id;
  }

  get name(): string {
    return this.props.name;
  }

  get price(): number {
    return this.props.price;
  }

  get description(): string {
    return this.props.description;
  }

  get imageUrl(): string {
    return this.props.imageUrl;
  }
}
