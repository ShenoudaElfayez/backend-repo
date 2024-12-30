const products = [];
let currentId = 1998;

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.createProduct = (req, res) => {
  const { name, description, price } = req.body;
  const newProduct = {
    id: currentId,
    name,
    description: `${description}\n\nكود المنتج: ${currentId}`,
    price,
  };
  currentId++;
  products.push(newProduct);
  res.status(201).json(newProduct);
};
