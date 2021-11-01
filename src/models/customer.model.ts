import mongoose, { Schema, model } from 'mongoose';
import { ICustomer } from '../types';

const customerSchema = new Schema<ICustomer>({
  nome: {
    type: String,
    required: true,

  },

  email: {
    type: String,
    unique: true,
    required: true,
 
  },


  endereco: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
    required: true,
  
  }
});

export default model<ICustomer>('Customer', customerSchema);
