import express from 'express';
import productsRouter from './routes/productsRouter';
import userRouter from './routes/userRouter';

const app = express();

app.use(express.json());

app.use('/', userRouter);

app.use('/', productsRouter);

export default app;
