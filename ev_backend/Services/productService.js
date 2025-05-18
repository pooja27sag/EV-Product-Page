const Product = require('./../Models/product');

// Create new product
const createProduct = async (productData, files) => {
    const {
        title,
        price,
        emi,
        description,
        longDescription,
        brand,
        category,
        color,
        colors,
        kwhBattery,
        kmRange,
        chargingTime,
        subscription,
        specifications,
        variants
    } = productData;

    if (!title || !description || !longDescription || !subscription || !specifications || !variants) {
        throw new Error('Required fields missing');
    }

    const parsedSubscription = JSON.parse(subscription);
    const parsedSpecifications = JSON.parse(specifications);
    const parsedVariants = JSON.parse(variants);
    const parsedColors = JSON.parse(colors);

    const imageMap = [];

    files.forEach(file => {
        const match = file.fieldname.match(/variantImages\[(.*)\]/);
        if (match) {
            const colorKey = match[1];
            imageMap.push({
                color: colorKey,
                image: file.filename
            });
        }
    });

    const newProduct = new Product({
        title,
        price,
        emi,
        description,
        longDescription,
        brand,
        category,
        color,
        colors: parsedColors,
        kwhBattery,
        kmRange,
        chargingTime,
        subscription: parsedSubscription,
        specifications: parsedSpecifications,
        variants: imageMap
    });

    await newProduct.save();
    return newProduct;
};

// Get all products
const getAllProducts = async () => {
    return await Product.find();
};
const getSingleProducts = async (productId) => {
    return await Product.findById(productId);
};

module.exports = {
    createProduct,
    getAllProducts,
    getSingleProducts,
};