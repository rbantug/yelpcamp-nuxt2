const User = require("../models/userModel");
const catchAsyncErrors = require("../utils/catchAsyncErrors");
const AppError = require("../utils/appError");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);

  res.cookie("jwt", token, {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 3600000), // 1 hour
    httpOnly: true,
    secure: req.secure || req.headers["x-forwarded-proto"] === "https",
  });

  // Remove password from response JSON
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.signup = catchAsyncErrors(async (req, res, next) => {

  const newUser = await User.create({
    name: req.body.name,
    password: req.body.password,
    role: req.body.role,
  });
  sendToken(newUser, 201, req, res);
});

exports.login = catchAsyncErrors(async (req, res, next) => {
  const { name, password } = req.body;


  if (!name || !password) {
    return next(new AppError("Please provide username and password", 400));
  }

  const user = await User.findOne({ name }).select("+password");

  

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect Email or Password", 401));
  }

  sendToken(user, 200, req, res);
});

exports.nuxtProtect = catchAsyncErrors(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(new AppError("You are not logged in.", 401));
  }
  // verify token & check if user still exist
  const decodedData = await promisify(jwt.verify)(
    token,
    process.env.JWT_SECRET_KEY
  );

  const currentUser = await User.findById(decodedData.id);
  if (!currentUser) {
    return next(new AppError("This user does not exist", 401));
  }

  console.log(currentUser)

  // store user info in req.user
  req.user = currentUser;
  next();
});

exports.logout = (req, res) => {
  res.clearCookie("jwt");
  res.status(200).json({ status: "success" });
};

exports.getUserInfo = async (req, res, next) => {
  const [bearer, token] = req.headers.authorization.split(" ");
  if (token) {
    const decodedData = await promisify(jwt.verify)(
      token,
      process.env.JWT_SECRET_KEY
    );
    // Check if the user still exist

    const currentUser = await User.findById(decodedData.id);
    if (!currentUser) {
      return next(new AppError("This user does not exist", 401));
    }

    res.status(200).json({
      status: "success",
      data: currentUser,
    });
  }
};

exports.restrictedTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You are not authorized to perform this action', 403)
      );
    }
    next();
  };
};
