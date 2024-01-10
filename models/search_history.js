const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const searchHistorySchema = new mongoose.Schema(
  {
    user_id: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    search_name: {
      type: String,
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

module.exports = mongoose.model("SearchHistory", searchHistorySchema, "search_history");
