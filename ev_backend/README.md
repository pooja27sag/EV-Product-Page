<!-- @format -->

# EV-Product-Page

# EV Product Backend

This repository contains the backend implementation for the EV Product Page application. It is built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**.

---

## Technology Stack

- **Node.js** (Backend runtime)
- **Express.js** (REST API framework)
- **MongoDB** (Database)
- **Mongoose** (MongoDB ODM)

---

## Prerequisites

Make sure the following tools are installed on your machine:

- [Node.js]
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Git](for cloning the repository)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/pooja27sag/EV-Product-Page.git
cd ev_backend
```

2. MongoDB Setup
   Option A: Local MongoDB
   Install MongoDB Community Server: https://www.mongodb.com/try/download/community

Start MongoDB:

On Windows: Use MongoDB Compass or run mongod

On Mac/Linux: Run mongod in terminal

Default connection URI: mongodb://localhost:27017

Get your connection string URI

Use this URI in your .env file (see below)

3. Restore MongoDB Backup

mongorestore --uri="mongodb://localhost:27017" ./ev_db

4. Install Node.js Dependencies
   npm install

5. Create Environment Variables File
   Create a .env file in the root of your project and add the following:
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/ev_db
6. Run the Backend Server
   npm start

API Endpoints Overview
Method Endpoint Description
POST /ev/create/product Add a new product
GET /ev/getProducts/ Get product details

More detailed documentation can be found in the https://documenter.getpostman.com/view/28589621/2sB2qXjhXV .


Database Schema Overview

ProductSchema
{
  title: String,
  price: String,
  emi: String,
  description: String,
  longDescription: String,
  brand: String,
  category: String,
  primaryColor: String,
  colors: [String],
  kwhBattery: String,
  kmRange: String,
  chargingTime: String,
  image: String,
  variants: [VariantsSchema],
  specifications: SpecificationSchema,
  subscription: SubscriptionSchema
}

SpecificationSchema
{
  general: {
    exShowroomPrice: String,
    certifiedRange: String,
    ...
  },
  technical: {
    motorPowerNominalPeak: String,
    ...
  },
  ...
  features: {
    instrumentCluster: String,
    ...
  },
  warranty: {
    vehicleWarranty: String,
    batteryWarranty: String
  }
}

SubscriptionSchema
{
  plan1: {
    title: String,
    data: [{ duration, subscription, deposit }]
  },
  plan2: {
    title: String,
    data: [{ duration, upto2, y3to4, y5to6, deposit }]
  }
}



** Design Notes & Challenges **

Modular schema design using embedded subdocuments like specification, variants, and subscription makes the data scalable and readable.
MongoDB schema normalization was avoided to keep all relevant product data within a single document for faster access and easier integration.
