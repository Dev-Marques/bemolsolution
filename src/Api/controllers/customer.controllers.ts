
import { Request, Response } from 'express';
import Address from '../../models/address.model';
import Customer from '../../models/customer.model';
import serviceZip from '../../services/connection.services';

export class CustomerController<ICustomer> {
  async create(req: Request, res: Response) {
    const { nome, email, ...address } = req.body;
    const addrCheck = await Address.findOne({ cep: address.cep, numero: address.numero }).exec();
    const customer = new Customer({ nome, email });
    if (addrCheck) {
      customer.endereco = addrCheck._id;
      customer.save();
      return res.status(201).send(customer);
    }
    const addr = new Address(address);
    await addr.save();
    customer.endereco = addr._id;

    customer.save();

    return res.status(201).send(customer);
  }

  async list(req: Request, res: Response) {
    const customer = await Customer.find().populate('endereco').exec();
    return res.status(200).send(customer);
  }

  async destroy(req: Request, res: Response) {
    const customer = await Customer.findById(req.params);
    if (customer) {
      customer.delete();
      return res.sendStatus(204);
    }
    return res.status(404).send({ error: 'customer not found' });
  }

  async subscriber(req: Request, res: Response) {
    const { cep, email, numero, nome } = req.body;
    const address = await serviceZip.get(`${cep}/json`);
    const addrCheck = await Address.findOne({ cep: cep, numero: numero }).exec();
    const customer = new Customer({ email, nome });
    if (addrCheck) {
      customer.endereco = addrCheck._id;
      customer.save();
      return res.status(201).send(customer);
    }
    const addr = new Address(address.data);
    addr.numero = numero;
    addr.cep = addr.cep.replace(/\.|\-/g, '');

    await addr.save();
    customer.endereco = addr._id;
    await customer.save();
    return res.status(201).send(customer);
  }
}
