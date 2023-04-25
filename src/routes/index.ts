import { createProductController } from '@/controllers';
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).end();
});

router.post('/product', createProductController.handle);

export default router;
