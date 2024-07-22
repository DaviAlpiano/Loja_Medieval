import express from 'express';
import Router from './router';
import middlewares from './middlewares';

const app = express();

app.use(express.json());

app.use('/products', Router.productsRouter);
app.use('/users', Router.userRouter);
app.use('/login', middlewares.validateLogin, Router.loginRouter);

export default app;
