const express = require("express");
const route = express.Router();

var controller = require("../controller/controller");

route.post("/api/payment/cart", controller.paymentStripCart);


module.exports = route;
