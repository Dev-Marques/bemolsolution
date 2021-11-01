import customerRouters from './customer.routers';
import { Express } from 'express';

export default (app: Express) => {
  const customer = customerRouters();

  app.use('/api', customer);
};
