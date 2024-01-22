const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    collection: {
      type: ObjectId,
      ref: "Collection",
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
    product_images: {
      type: [ObjectId],
      ref: "ProductImage",
      required: false,
    },

    price: {
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
    added_by: {
      type: ObjectId,
      ref: "Admin",
      required: true,
    },
    updated_by: {
      type: ObjectId,
      ref: "Admin",
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

module.exports = mongoose.model("Product", productSchema, "products");
