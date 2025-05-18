const mongoose = require('mongoose');

const SubscriptionPlan1Schema = new mongoose.Schema({
    duration: { type: String },
    subscription: { type: String },
    deposit: { type: String }
}, { _id: false });

const SubscriptionPlan2Schema = new mongoose.Schema({
    duration: { type: String },
    upto2: { type: String, default: "-" },
    y3to4: { type: String, default: "-" },
    y5to6: { type: String, default: "-" },
    deposit: { type: String }
}, { _id: false });

const SubscriptionSchema = new mongoose.Schema({
    plan1: {
        title: { type: String },
        data: [SubscriptionPlan1Schema]
    },
    plan2: {
        title: { type: String },
        data: [SubscriptionPlan2Schema]
    }
}, { _id: false });

module.exports = SubscriptionSchema;
