const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mock product data
const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

