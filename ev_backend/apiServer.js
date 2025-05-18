const express = require('express');
const app = express();
const router = express.Router();
const dotenv = require('dotenv');
const { connectDB } = require('./Models/index.js');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var cors = require("cors");
app.use(cors({ origin: "*" }));

function apiServer() {


    dotenv.config();
    const PORT = process.env.PORT || 3000;

    app.use(express.json());

    app.use((req, res, next) => {
        console.log(`[${req.method}] ${req.url}`);
        next();
    });
    app.use('/uploads', express.static('uploads'));
    require("./API/productApi.js").productApi(router);
    app.use('/ev', router);

    connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });

}
module.exports = {
    apiServer
};