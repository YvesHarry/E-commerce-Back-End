const { Product } = require('../models');

const productData = [
  {
    product_name: 'Personalized T-Shirt',
    price: 15.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Jordan Sneakers',
    price: 1395.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Basketball snapback',
    price: 152.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Micheal Jackson Bad',
    price: 12.99,
    stock: 40,
    category_id: 3,
  },
  {
    product_name: 'Black Mug',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

function seedProducts() {
  return Product.bulkCreate(productData);
}

module.exports = seedProducts;
