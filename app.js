import express from 'express'
import productRoutes from './routes/products'
const app = express();


app.use(express.json());

app.use(productRoutes);

export default app;