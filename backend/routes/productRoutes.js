import express from 'express';
import Product from '../models/ProductModel.js';
const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  return res.send(products);
});

productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: 'Product not found' });
  }
});

productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: 'Product not found' });
  }
});

export default productRouter;
