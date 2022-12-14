const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  const { size, limit } = req.query;
  const limits = size || limit || 10;
  for (let index = 0; index < limits; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }

  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'arberja',
    price: 2000,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'create sucess',
    data: body,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  res.json({
    message: 'delete',
    id,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'update ',
    data: body,
    id,
  });
});

module.exports = router;
