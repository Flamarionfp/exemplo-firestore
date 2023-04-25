import { DeleteProductService } from '@/services/delete-product/delete-product';
import { Request, Response } from 'express';

export class DeleteProductController {
  constructor(private readonly deleteProductService: DeleteProductService) {}

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id = '' } = req.params;
      await this.deleteProductService.execute(id);

      return res.status(200).json({ message: 'Product deleted' });
    } catch (error: any) {
      const defaultErrorMessage = 'Failed to delete product';

      return res
        .status(400)
        .json({ message: error?.message || defaultErrorMessage });
    }
  };
}
