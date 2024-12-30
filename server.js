const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('API is working!');
});

// مسار جديد لإرجاع المنتجات
app.get('/api/products', (req, res) => {
  const products = [
    { id: 1998, name: 'Product 1', description: 'This is product 1' },
    { id: 1999, name: 'Product 2', description: 'This is product 2' },
  ];
  res.json(products);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
