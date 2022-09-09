const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handleDuplicateFieldDB = (err) => {
  const message = `Duplicate field value: '${err.keyValue.name}'. Please use another value.`;
  return new AppError(message, 400);
};

const handleValidatorErrorDB = (err) => {
  const errors = Object.values(err.errors).map((el) => el.message);
  const message = `Invalid input data: ${errors.join('. ')}`;
  return new AppError(message, 400);
};
// Object.values converts objects to arrays

const handleJWTInvalidSig = () =>
  new AppError('Invalid token. Please try again!', 401);

const handleExpiredToken = () =>
  new AppError('Expired token. Please try to login again', 401);

const sendErrorDev = (err, req, res) => {
  // API error
  if (req.originalUrl.startsWith('/api')) {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  } else {
    // Rendered Website Error
    console.error(`This is a programming error`, err);
    res.status(err.statusCode);
  }
};

const sendErrorProd = (err, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    // API error
    if (err.isOperational) {
      // Operational, trusted error: we will send a message to the client
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    } else {
      // Programming, unknown error: do not leak details to client
  
      // send a log
      console.error(`This is a programming error`, err);
  
      // Simple message to client
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong',
      });
    }
  } else {
    // Rendered Website Error
      if (err.isOperational) {
        // Operational, trusted error: we will send a message to the client
        res.status(err.statusCode)
      } else {
        // Programming, unknown error: do not leak details to client
    
        // send a log
        console.error(`This is a programming error`, err);
    
        // Simple message to client
        res.status(500)
      }

  }
    
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500; //Internal Server Error
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = Object.assign(err);

    // For handling invalid _id when searching, updating or deleting documents
    if (err.name === 'CastError') error = handleCastErrorDB(err);

    // For handling new documents with a duplicate field name
    if (err.code === 11000) error = handleDuplicateFieldDB(err);

    // For handling validator errors from schema
    if (err.name === 'ValidationError') error = handleValidatorErrorDB(err);

    // For handling JWT invalid signatures
    if (err.name === 'JsonWebTokenError') error = handleJWTInvalidSig();

    // For handling expired tokens
    if (err.name === 'TokenExpiredError') {
      //res.clearCookie('jwt');
      error = handleExpiredToken()
    };

    sendErrorProd(error, req, res);
  }
};


