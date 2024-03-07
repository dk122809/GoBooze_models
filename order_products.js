const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderProductsSchema = new mongoose.Schema(
  {
    variant_id: {
      type: ObjectId,
      ref: "Variant",
      required: true,
    },
    order_id: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 1,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },
    delivered_time: {
      type: Date,
      required: false,
    },
    cancel_date: {
      type: Date,
      required: false,
    },
    return_date: {
      type: Date,
      required: false,
    },
    rating: {
      type: Number,
      required: false,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OrderProduct",
  OrderProductsSchema,
  "order_products"
);
