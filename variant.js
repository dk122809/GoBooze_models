const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema(
  {
    variantName: {
      type: String,
      required: true,
    },
    variantCode: {
      type: String,
      required: false,
    },
    variantImage: {
      type: String,
      required: false,
    },
    sellingPrice: {
      type: Number,
      required: true,
    },
    purchasePrice: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    finalSellingPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: true,
    },
    addedBy: {
        type: ObjectId,
        ref: "Admin",
        required: false,
      },
      updatedBy: {
        type: ObjectId,
        ref: "Admin",
        required: false,
      },
  },
  {
    suppressReservedKeysWarning: true,
    timestamps: true,
  }
);

module.exports = mongoose.model("variant", variantSchema, "variants");
