const express = require('express')

const router = express.Router()

const campController = require('./controllers/campController')
const authController = require('./controllers/authController')
const reviewController = require('./controllers/reviewController')


///// CAMP ROUTES

router
    .route('/camps')
    .get(campController.getAllCamps)
    .post(
        authController.nuxtProtect,
        authController.restrictedTo('admin'), campController.addOneCamp
        ) 

router 
    .route('/camps/:id')    
    .get(campController.getOneCamp)
    .patch(
        authController.nuxtProtect,
        authController.restrictedTo('admin'), campController.updateOneCamp
        )
    .delete(
        authController.nuxtProtect,
        authController.restrictedTo('admin'), campController.deleteOneCamp
        )


////// AUTH ROUTES 

router
    .route('/signup')
    .post(authController.signup)
router.post('/signin', authController.login)
router.get('/logout', authController.logout)
router.get('/getUserInfo', authController.getUserInfo)


////// REVIEW ROUTES

router
    .route('/reviews')
    .get(reviewController.getAllReviews)
    .post(
        reviewController.createSingleReview)

router
    .route('/reviews/:id')
    .get(reviewController.getSingleReview)
    .patch(
        authController.nuxtProtect,
        authController.restrictedTo(
        'admin'),
        reviewController.updateSingleReview)
    .delete(
        authController.nuxtProtect,
        authController.restrictedTo(
        'admin'),
        reviewController.deleteSingleReview)    

module.exports = router