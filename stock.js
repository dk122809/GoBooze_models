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
    quantity: {
      type: Number,
      required: 0,
    },
    available_quantity: {
      type: Number,
      required: 0,
    },
    added_by: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "User",
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
      enum: ["in-stock", "out-of-stock"],
      default: "in-stock",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Inventory", inventorySchema, "inventory");
