const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db/db'); 
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

// Environment variables-ai load panna
dotenv.config();

// Database-ai connect panna
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes setup
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Basic Route (Check panna)
app.get('/', (req, res) => {
    res.send('Product Inventory API is running perfectly! 🚀');
});

// Port setting
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} ✅`);
});