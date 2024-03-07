const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const OrderStatusSchema = new mongoose.Schema(
  {
    order_id: {
      type: ObjectId,
      ref: "Order",
      required: true,
    },
    delivery_user: {
      type: ObjectId,
      ref: "User", // for now we are using  user as the delivery person but it can be a different model in future
      required: true,
    },
    delivery_status: {
      type: String,
      required: true,
      enum: ["pending", "accepted", "rejected", "delivered", "reached"],
      default: "pending",
    },
    location: {
      lat: {
        type: Number,
        required: false,
      },
      lng: {
        type: Number,
        required: false,
      },
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "OrderProduct",
  OrderStatusSchema,
  "order_products"
);
