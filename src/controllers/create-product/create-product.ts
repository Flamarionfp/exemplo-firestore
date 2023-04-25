import { CreateProductService } from '@/services/create-product/create-product';
import { Request, Response } from 'express';

export class CreateProductController {
  constructor(private readonly createProductService: CreateProductService) {}

  handle = async (req: Request, res: Response) => {
    console.log(req.body);

    try {
      await this.createProductService.execute(req.body);
      return res.status(201).json({ message: 'Product created' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };
}
