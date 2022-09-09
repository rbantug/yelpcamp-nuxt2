const Camp = require('../models/campModel')
const catchAsyncErrors = require('../utils/catchAsyncErrors')
const AppError = require('../utils/appError');
const filterObj = require('../utils/filterObj');
const apiFeatures = require('../utils/apiFeatures')

exports.getAllCamps = catchAsyncErrors( async(req, res, next) => {

    const regex = new RegExp(`${req.query.name}`, 'i')

    const features = new apiFeatures(Camp.find({name: regex}), req.query)
        .sort()
        .limitFields()
        .paginate()
    
    const camps = await features.query

    if (!camps) {
        return next(new AppError('There are no available camps', 404))
    }

    res.status(200).json({
        status: 'success',
        result: camps.length,
        data: camps
    })
})

exports.getOneCamp = catchAsyncErrors( async(req, res, next) => {
    const camp = await Camp.find({slug: req.params.id}).populate('reviews')

    if (!camp) {
        return next(new AppError('The camp does not exist', 404))
    }

    res.status(200).json({
        status: 'success',
        data: camp
    })
})

exports.addOneCamp = catchAsyncErrors( async(req, res, next) => {
    const newCamp = await Camp.create(req.body)

    res.status(201).json({
        status: 'success',
        data: newCamp
    })
})

exports.updateOneCamp = catchAsyncErrors( async(req, res, next) => {
    req.body = filterObj(req.body, 'name', 'price', 'description', 'mapImgLink', 'coverImgLink', 'reviews')

    const camp = await Camp.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    })

    if (!camp) {
        return next(new AppError('This camp does not exist', 404))
    }

    res.status(200).json({
        status: 'success',
        data: camp
    })
})

exports.deleteOneCamp = catchAsyncErrors( async(req, res, next) => {
    const camp = await Camp.findByIdAndDelete(req.params.id)

    if (!camp) {
        return next(new AppError('This camp does not exist', 404));
      }

    res.status(204).json({
        status: 'success',
        message: 'document was deleted',
      })
})