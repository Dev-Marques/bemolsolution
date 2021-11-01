import { ObjectId } from "mongoose";

export interface IAddress {
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  customer:ICustomer
}

export interface IAddressDTO {
  _id:string,
  cep: string;
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  customer:ICustomer
}

export interface ICustomer{
  nome: string;
  email: string;
  endereco:ObjectId

}

