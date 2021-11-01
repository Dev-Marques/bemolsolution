import express from 'express';
import 'dotenv/config';
import buildRouter from '../src/Api/routers';
import { connect } from 'mongoose';
import cors from 'cors';

const conn: string = process.env.DATABASE || '';
const app = express();
const PORT = 3010;
app.use(cors());
app.use(express.json());
buildRouter(app);

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});

connect(conn)
  .then(() => {
    console.log('Conectado com sucesso');
  })
  .catch((e) => {
    console.log('Houve um erro ao conectar', e);
  });
