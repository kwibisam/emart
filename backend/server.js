import express from 'express';
import data from './data.js';
const app = express();

app.get('/api/products', (req, res) => {
  return res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((p) => p.slug === req.params.slug);
  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: 'Product not found' });
  }
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((p) => p._id === Number(req.params.id));
  if (product) {
    return res.send(product);
  } else {
    return res.status(404).send({ message: 'Product not found' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
