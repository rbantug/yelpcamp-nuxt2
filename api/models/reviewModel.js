const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: [true, 'Please specify a user'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    review: {
      type: String,
      required: true,
    },
    camp: {
      type: mongoose.Schema.ObjectId,
      ref: "Camp",
      required: [true, "Review must belong to a camp"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ReviewSchema.index({camp: 1, user: 1}, { unique: true });

ReviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'name'
  })
  next()
})

const Review = mongoose.model("Review", ReviewSchema);

module.exports = Review;
