const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema(
  {
    addressFullName: { type: String, required: true },

    addressPhoneNumber: { type: String, required: true },
    locality: { type: String, required: false },
    country: { type: String, required: true },
    addressPincode: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    houseNo: { type: String, required: false },
    roadName: { type: String, required: false },
    select: { type: String, required: false },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Address", addressSchema, "addresses");
