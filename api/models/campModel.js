const mongoose = require('mongoose')
const validator = require('validator')
const slugify = require('slugify')

const CampSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [6, 'The camp name should have at least 6 characters'],
        unique: true,
        trim: true,
        validate: {
            validator: function (val) {
                const newString = val.split(' ').join('')
                return validator.isAlpha(newString)
            },
            message: 'The tour name can only accept characters',
        },
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    createdBy: {
        type: String,
        required: true,
        trim: true,
    },
    mapImgLink: {
        type: String,
        default: 'https://drive.google.com/uc?id=1qKAlJLsZzk_LpyWhet5OtxUK9Lkgivxs'
    },
    coverImgLink: {
        type: String,
        required: true,
    },
    slug: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }, 
    /* reviews: [
        {
            type: mongoose.Schema.ObjectId,
            ref: 'Review',
        }
    ] */ // Referencing will not work because there will be multiple reviews under one camp. If we are referring to guides, then it is possible to use it because there are a few guides per camp.

    // solution: virtual populate
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
)

// Virtual Populate

CampSchema.virtual('reviews', {
    ref: 'Review',
    foreignField: 'camp',
    localField: '_id',
})

/// Document Middleware

CampSchema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true })
    next()
})

/// Query Middleware

/* CampSchema.pre(/^find/, function (next) {
    this.populate({
        path: 'reviews'
    })
    next()
}) */

const Camp = mongoose.model('Camp', CampSchema)

module.exports = Camp