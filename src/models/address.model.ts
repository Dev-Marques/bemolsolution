import mongoose,{ Schema, model } from 'mongoose';
import { IAddress } from '../types';

const addressSchema = new Schema<IAddress>({
  cep: {
    type: String,
    required: true,
  
  },

  logradouro: {
    type: String,
    required: true,
    
  },

  numero: {
    type: Number,
    required: true,
    
  },

  bairro: {
    type: String,
    required: true,
    
  },

  localidade: {
    type: String,
    required: true,
    
  },

  uf: {
    type: String,
    required: true,
  
  }
});

export default model<IAddress>('Address', addressSchema);
