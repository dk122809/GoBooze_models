const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    alternative_phone_number: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    storage_images: {
      type: [String],
      required: false,
    },
    store_name: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },
    zip_code: {
      type: String,
      required: true,
    },
    is_active: {
      type: Boolean,
      default: false,
      required: false,
    },
    location: {
      type: {
        type: String,
        enum: ["Point"],
        default: "Point",
        required: false,
      },
      coordinates: {
        type: [Number, Number], // [<longitude>, <latitude> ]
        required: false,
        // index: '2dsphere'
      },
    },

    average_store_rating: {
      type: Number,
      default: 0,
      required: false,
    },
    total_ratings: {
      type: Number,
      default: 0,
      required: false,
    },

    added_by: {
      type: ObjectId,
      ref: "Admin",
      required: false,
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

    sequence_no: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Store", adminSchema, "store");
