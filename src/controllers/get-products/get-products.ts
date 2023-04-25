import { GetProductsService } from '@/services/get-products/get-products';
import { Request, Response } from 'express';

export class GetProductsController {
  constructor(private readonly getProductsService: GetProductsService) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const products = await this.getProductsService.execute();
      return res.status(200).json(products);
    } catch (error: any) {
      const defaultErrorMessage = 'Failed to get products';

      return res
        .status(400)
        .json({ message: error?.message || defaultErrorMessage });
    }
  };
}
