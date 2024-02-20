const addressModel = require("./address");
const adminModel = require("./admin");
const cartModel = require("./cart");
const collectionModel = require("./category");
const subCollectionModel = require("./sub_collection");
const couponModel = require("./coupon");
const orderModel = require("./order");
const paymentMethodModel = require("./payment_method");
const productModel = require("./product");
const itemModel = require("./items");
const reviewModel = require("./review");
const searchHistoryModel = require("./search_history");
const storeModel = require("./store");
const userModel = require("./user");
const productImageModel = require("./product_image");
const itemImageModel = require("./item_image");
const stockModel = require("./stock");
const variantModel=require("./variant")
const brandModel=require("./brands")

module.exports = {
  addressModel,
  brandModel,
  adminModel,
  variantModel,
  cartModel,
  collectionModel,
  subCollectionModel,
  couponModel,
  orderModel,
  paymentMethodModel,
  productModel,
  reviewModel,
  searchHistoryModel,
  storeModel,
  userModel,
  productImageModel,
  stockModel,
  itemModel,
  itemImageModel
};
