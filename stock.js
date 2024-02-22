const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const inventorySchema = new mongoose.Schema(
  {
    store_id: {
      type: ObjectId,
      ref: "Store",
      required: true,
    },

    item_id: {
      type: ObjectId,
      ref: "Item",
      required: true,
    },
    quantity: {
      type: Number,
      required: 0,
    },
    available_quantity: {
      type: Number,
      required: 0,
    },
    minimum_quantity: {
      type: Number,
      required: 0,
    },
    added_by: {
      type: ObjectId,
      ref: "Admin",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "Admin",
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    stock_status: {
      type: String,
      enum: ["in-stock", "out-of-stock","low-stock"],
      default: "in-stock",
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
      required: false,
    },
    subCategory_id: {
      type: ObjectId,
      ref: "subCategory",
      required: false
    },
    purchase_price: {
      type: Number,
      default: 0,
    },
    selling_price: {
      type: Number,
      default: 0,
    },
    final_selling_price:{
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    gst: {
      type: Number,
      default: 0,
    },
    number_of_products: {
      type: Number,
      default:0
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Stock", inventorySchema, "stocks");
