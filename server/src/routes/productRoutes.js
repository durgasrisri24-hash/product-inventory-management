const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Unga Product Model-ai inga import pandrom

// 1. Database-la irukara ella products-aiyum list panna (GET)
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

// 2. Pudhu product-ai Database-la add panna (POST)
router.post('/add', async (req, res) => {
    try {
        const { name, category, price, stock } = req.body;

        // Validation: Data illa na error anuppum
        if (!name || !price) {
            return res.status(400).json({ message: "Name and Price are required! ❌" });
        }

        const newProduct = new Product({ name, category, price, stock });
        await newProduct.save(); // Inga dhaan MongoDB-la product save aagudhu!

        res.status(201).json({ 
            message: "Product added successfully! ✅", 
            product: newProduct 
        });
    } catch (error) {
        console.error("Add Product Error:", error.message);
        res.status(500).json({ message: "Error adding product", error: error.message });
    }
});

module.exports = router;