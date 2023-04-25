import { createProductController, getProductsController } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).end();
});

router.post('/product', createProductController.handle);
router.get('/product', getProductsController.handle);

export default router;
