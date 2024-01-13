const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: [ObjectId],
      ref: "User",
      required: true,
    },
    transaction_id: {
      type: String,
      required: false,
    },
    items: {
      type: [ObjectId],
      ref: "Product",
      required: true,
    },
    delivery_status: {
      type: String,
      enum: ["pending", "accepted", "rejected", "on-the-way", "delivered"],
      default: "pending",
      required: true,
    },
    delivery_user: {
      type: [ObjectId],
      required: false,
    },
    delivery_time: {
      type: String,
      required: false,
    },
    delayed_time: {
      type: String,
      required: false,
    },
    pickup_delay_time: {
      type: String,
      required: false,
    },
    delivered_on: {
      type: Date,
      required: false,
    },
    order_value: {
      type: Number,
      required: true,
    },
    discount_value: {
      type: Number,
      required: false,
      default: 0,
    },
    coupon: {
      type: ObjectId,
      ref: "Coupon",
      required: false,
    },
    payment_method: {
      type: ObjectId,
      ref: "PaymentMethod",
      required: true,
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

module.exports = mongoose.model("Order", orderSchema, "orders");
