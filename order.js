const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    address_id: {
      type: ObjectId,
      ref: "Address",
      required: true,
    },
    transaction_id: {
      type: String,
      required: false,
    },
    transaction_status: {
      type: String,
      required: false,
      default:"pending"
    },
    order_status: {
      type: String,
      enum: [
        "processing",
        "accepted",
        "rejected",
        "on-the-way",
        "delivered",
        "cancelled",
        "returned",
      ],
      default: "processing",
      required: true,
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
    tax: {},
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
      required: false,
    },
    order_rating: {
      type: Number,
      required: false,
    },
    order_review: {
      type: String,
      required: false,
    },
    order_delivery_images: {
      type: Array,
      required: false,
    },
    gobooze_rating: {
      type: Number,
      required: false,
    },
    gobooze_review: {
      type: String,
      required: false,
    },
    comments: {
      type: String,
      required: false,
    },
    discard_from: {
      type: ObjectId,
      ref: "Store",
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

module.exports = mongoose.model("Order", orderSchema, "orders");
