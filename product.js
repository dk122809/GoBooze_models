const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_code: {
      type: String,
      required: false,
    },
    product_description: {
      type: String,
      required: false,
    },
    collection: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },
    item_id: {
      type: ObjectId,
      ref: "Item",
      required: true,
    },
    sub_collection: {
      type: ObjectId,
      ref: "SubCollection",
      required: false,
    },
    selling_price: {
      type: Number,
      required: true,
    },
    cost_price: {
      type: Number,
      required: true,
    },
    gross_profit: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
      default: 0,
    },

    average_rating: {
      type: Number,
      required: false,
      default: 0,
    },
    number_of_ratings: {
      type: Number,
      required: false,
      default: 0,
    },
    number_of_reviews: {
      type: Number,
      required: false,
      default: 0,
    },
    number_of_times_ordered: {
      type: Number,
      required: false,
      default: 0,
    },
    in_favourites: {
      type: Number,
      required: false,
      default: 0,
    },
    in_customer_cart: {
      type: Number,
      required: false,
      default: 0,
    },
    is_popular: {
      type: Boolean,
      required: false,
      default: false,
    },
    tags: {
      type: [String],
      required: false,
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
  },
  {
    suppressReservedKeysWarning: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema, "products");
