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
On Mac/Linux: Run mongod in terminal

##  MongoDB Setup (Windows)

To run this project on Windows, you need to install and configure the following:

###  Required Tools

1. **MongoDB Community Edition**
2. **MongoDB Shell**
3. **MongoDB Database Tools** (includes `mongorestore`)

>  All tools must be downloaded and installed locally to make the app functional and to allow restoring the initial database backup.

---

###  Installation Instructions

#### 1. **Download MongoDB Community Edition**

* Download from: [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
* Choose the `.msi` installer
* Install it to the default location:
  `C:\Program Files\MongoDB\Server\6.0\`

#### 2. **Download MongoDB Shell**

* Download from: [https://www.mongodb.com/try/download/shell](https://www.mongodb.com/try/download/shell)
* Unzip and place the folder at:
  `C:\Program Files\MongoDB\Shell\`

#### 3. **Download MongoDB Database Tools**

* Download from: [https://www.mongodb.com/try/download/database-tools](https://www.mongodb.com/try/download/database-tools)
* Unzip the archive and place it in:
  `C:\Program Files\MongoDB\Tools\100\`

---

###  Add Environment Variables

After installation, add the following paths to your **System Environment Variables**:


1. MongoDB Shell:

   ```
   C:\Program Files\MongoDB\Shell\bin
   ```

2. MongoDB Tools:

   ```
   C:\Program Files\MongoDB\Tools\100\bin
   ```

####  How to Add to PATH:

* Press `Win + S`, search for **"Environment Variables"**
* Click **"Edit the system environment variables"**
* In the **System Properties** window, click **"Environment Variables..."**
* Under **System Variables**, select `Path` → click **Edit**
* Click **New** and paste the above paths
* Click OK on all dialogs

---

### Verifying Installation

After setting the paths, open a new terminal and run:

```bash
mongo --version
mongosh --version
mongorestore --version
```

Each command should display version information without errors.

---

###  Restoring the Database Backup

Once the tools are installed and PATH is set, restore the database:

```bash
mongorestore --uri="mongodb://localhost:27017" --db=ev_db ./ev_db
```

> Ensure that the `./ev_db` folder contains the BSON and metadata files (`.bson`, `.json`, etc.) exported from a previous MongoDB dump.

Default connection URI: mongodb://localhost:27017

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
