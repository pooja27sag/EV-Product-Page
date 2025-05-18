const productService = require('./../Services/productService');

// POST /api/products
const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const files = req.files;

        const result = await productService.createProduct(productData, files);
        return res.status(201).json({ success: true, product: result });

    } catch (error) {
        console.error('Insert product error:', error.message);
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

// GET /api/products
const getAllProducts = async (_req, res) => {
    try {
        const products = await productService.getAllProducts();
        if (!products) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getSingleProducts = async (req, res) => {
    const productId = req.params.id;
    try {
        const products = await productService.getSingleProducts(productId);
        if (!products) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProducts
};
