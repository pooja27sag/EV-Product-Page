const mongoose = require('mongoose');
const SpecificationSchema = require('./specification');
const SubscriptionSchema = require('./subscription');
const VariantsSchema = require('./variants');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: String,
    emi: String,
    description: String,
    longDescription: String,
    brand: String,
    category: String,
    primaryColor: String,
    colors: [String],
    // addOns: [String],
    kwhBattery: String,
    kmRange: String,
    chargingTime: String,
    image: String,
    variants: [VariantsSchema],
    specifications: SpecificationSchema,
    subscription: SubscriptionSchema
});

module.exports = mongoose.model('Product', ProductSchema);


