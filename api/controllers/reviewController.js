const Review = require('../models/reviewModel')

const catchAsyncErrors = require('../utils/catchAsyncErrors')
const AppError = require('../utils/appError');
const filterObj = require('../utils/filterObj');

exports.getAllReviews = catchAsyncErrors( async(req, res, next) => {
    const reviews = await Review.find()

    if (!reviews) {
        return next(new AppError('There are no available reviews', 404))
    }

    res.status(200).json({
        status: 'success',
        data: reviews
    });
})

exports.getSingleReview = catchAsyncErrors( async(req, res, next) => {
    const review = await Review.findById(req.params.id)

    if(!review) {
        return next(new AppError('This reviews does not exist', 404))
    }

    res.status(200).json({
        status: 'success',
        data: review
    });
})

exports.createSingleReview = catchAsyncErrors( async(req, res, next) => {
    const newReview = await Review.create({
        review: req.body.review,
        camp: req.body.camp,
        user: req.body.user
    })

    res.status(201).json({
        status: 'success',
        data: newReview
    });
})

exports.updateSingleReview = catchAsyncErrors( async(req, res, next) => {
    req.body = filterObj(req.body, 'review', 'camp')

    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    res.status(200).json({
        status: 'success',
        data: review
    });
})

exports.deleteSingleReview = catchAsyncErrors( async(req, res, next) => {
    const review = await Review.findByIdAndDelete(req.params.id)

    if(!review) {
        return next(new AppError('This camp does not exist', 404))
    }

    res.status(204).json({
        status: 'success',
        message: 'document was deleted',
      })
})