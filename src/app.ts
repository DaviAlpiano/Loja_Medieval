import express from 'express';
import Router from './router';

const app = express();

app.use(express.json());

app.use('/products', Router.productsRouter);
app.use('/users', Router.userRouter);
app.use('/login', Router.loginRouter);

export default app;
