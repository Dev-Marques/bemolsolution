import { Router } from 'express';
import { CustomerController } from '../controllers/customer.controllers';

const router = Router();

export default () => {
  const customer = new CustomerController();
  router.post('/customer', customer.create);
  router.get('/customer', customer.list);
  router.delete('/customer/:_id', customer.destroy);
  router.post('/subscriber', customer.subscriber);
  return router;
};
