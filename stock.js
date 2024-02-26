const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const inventorySchema = new mongoose.Schema(
  {
    store_id: {
      type: ObjectId,
      ref: "Store",
      required: true,
    },
    product_id: {
      type: ObjectId,
      ref: "Product",
      required: true,
    },
    category_id: {
      type: ObjectId,
      ref: "category",
      required: true,
    },
    subCategory_id: {
      type: ObjectId,
      ref: "subCategory",
      required: true
    },
    purchase_price: {
      type: Number,
      default: 0,
      required:true
    },
    selling_price: {
      type: Number,
      default: 0,
      required:true
    },
    final_selling_price:{
      type: Number,
      default: 0,
    },
    gst: {
      type: Number,
      default: 0,
      required:true
    },
    number_of_products: {
      type: Number,
      default:0,
      required:true
    },
    discount: {
      type: Number,
      default: 0,
      required:true
    },
    quantity: {
      type: Number,
      default: 0,
      required:false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", inventorySchema, "stocks");
