const productController = require('./../Controller/productController');
const upload = require('./../Config/mutler.js');
const Product = require('./../Models/product.js'); // update this as per your path

function productApi(router) {
    router.get('/getProducts', productController.getAllProducts);
    router.get('/getSingleProduct/:id', productController.getSingleProducts);

    router.post('/create/product', upload.any(), async (req, res) => {
        try {
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
            } = req.body;

            if (!title || !description || !longDescription || !subscription || !specifications || !variants) {
                return res.status(400).json({ message: 'Required fields missing' });
            }

            const parsedSubscription = JSON.parse(subscription);
            const parsedSpecifications = JSON.parse(specifications);
            const parsedVariants = JSON.parse(variants);
            const parsedColors = JSON.parse(colors);

            const imageMap = [];
            req.files.forEach(file => {
                const match = file.fieldname.match(/variantImages\[(.*)\]/);
                console.log(match[1]);
                if (match) {
                    const colorKey = match[1];
                    let obj = {
                        color: colorKey,
                        image: file.filename
                    };
                    imageMap.push(obj);
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
            res.status(201).json({ success: true, product: newProduct });

        } catch (error) {
            console.error('Insert product error:', error);
            res.status(500).json({ success: false, message: 'Server error' });
        }
    });


} module.exports = { productApi };