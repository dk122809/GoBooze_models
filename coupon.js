const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const couponSchema = new mongoose.Schema(
  {
    coupan_name: {
      type: String,
      required: true,
      uppercase: true
    },
    description: {
      type: String,
      default: '',
    },
    validFrom: {
      type: Date,
      required: true
    },
    validTill: {
      type: Date,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      required: true
    },
    coupan_value: {
      type: Number,
      required: true
    },
    coupan_value_type: {
      type: String,
      required: true,
      default: "dollar",
      enum: ['dollar', 'percent']
    },
    coupan_users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    }],
    status: {
      type: String,
      default: 'active',
      enum: ['active', 'expired']
    },
    isDeleted: {
      type: Boolean,
      default: false
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Coupon", couponSchema, "coupons");