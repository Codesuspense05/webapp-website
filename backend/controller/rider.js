const express = require("express");
const path = require("path");
const router = express.Router();
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const Rider = require("../model/rider");
const { isAuthenticated, isRider, isAdmin } = require("../middleware/auth");
const cloudinary = require("cloudinary");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const sendRiderToken = require("../utils/riderToken");

// create rider
router.post("/create-rider", catchAsyncErrors(async (req, res, next) => {
  try {
    const { email } = req.body;
    const riderEmail = await Rider.findOne({ email });
    if (riderEmail) {
      return next(new ErrorHandler("User already exists", 400));
    }

    const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avatars",
    });


    const rider = {
      name: req.body.name,
      email: email,
      password: req.body.password,
      avatar: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    };

    const activationToken = createActivationToken(rider);

    const activationUrl = `http://localhost:3000/rider/activation/${activationToken}`;

    try {
      await sendMail({
        email: rider.email,
        subject: "Activate your Rider",
        message: `Hello ${rider.name}, please click on the link to activate your rider: ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `please check your email:- ${rider.email} to activate your rider!`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
}));

// create activation token
const createActivationToken = (rider) => {
  return jwt.sign(rider, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// activate rider
router.post(
  "/activation",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      const newRider = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newRider) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar, zipCode, address, phoneNumber } =
        newRider;

      let rider = await Rider.findOne({ email });

      if (rider) {
        return next(new ErrorHandler("User already exists", 400));
      }

      rider = await Rider.create({
        name,
        email,
        avatar,
        password,
        zipCode,
        address,
        phoneNumber,
      });

      sendRiderToken(rider, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// login rider
router.post(
  "/login-rider",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
      }

      const user = await Rider.findOne({ email }).select("+password");

      if (!user) {
        return next(new ErrorHandler("User doesn't exists!", 400));
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendRiderToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// load rider
router.get(
  "/getRider",
  isRider,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const rider = await Rider.findById(req.rider._id);

      if (!rider) {
        return next(new ErrorHandler("User doesn't exists", 400));
      }

      res.status(200).json({
        success: true,
        rider,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// log out from rider
router.get(
  "/logout",
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("rider_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        sameSite: "none",
        secure: true,
      });
      res.status(201).json({
        success: true,
        message: "Log out successful!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get rider info
router.get(
  "/get-rider-info/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const rider = await Rider.findById(req.params.id);
      res.status(201).json({
        success: true,
        rider,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update rider profile picture
router.put(
  "/update-rider-avatar",
  isRider,
  catchAsyncErrors(async (req, res, next) => {
    try {
      let existsRider = await Rider.findById(req.Rider._id);

        const imageId = existsRider.avatar.public_id;

        await cloudinary.v2.uploader.destroy(imageId);

        const myCloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
          folder: "avatars",
          width: 150,
        });

        existsRider.avatar = {
          public_id: myCloud.public_id,
          url: myCloud.secure_url,
        };

  
      await existsRider.save();

      res.status(200).json({
        success: true,
        rider:existsRider,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update rider info
router.put(
  "/update-rider-info",
  isRider,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { name, description, address, phoneNumber, zipCode } = req.body;

      const rider = await Rider.findOne(req.rider._id);

      if (!rider) {
        return next(new ErrorHandler("User not found", 400));
      }

      rider.name = name;
      rider.description = description;
      rider.address = address;
      rider.phoneNumber = phoneNumber;
      rider.zipCode = zipCode;

      await rider.save();

      res.status(201).json({
        success: true,
        rider,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// all riders --- for admin
router.get(
  "/admin-all-riders",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const riders = await Rider.find().sort({
        createdAt: -1,
      });
      res.status(201).json({
        success: true,
        riders,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// delete rider ---admin
router.delete(
  "/delete-rider/:id",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const rider = await Rider.findById(req.params.id);

      if (!rider) {
        return next(
          new ErrorHandler("Rider is not available with this id", 400)
        );
      }

      await Rider.findByIdAndDelete(req.params.id);

      res.status(201).json({
        success: true,
        message: "Rider deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update rider withdraw methods --- riders
router.put(
  "/update-payment-methods",
  isRider,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { withdrawMethod } = req.body;

      const rider = await Rider.findByIdAndUpdate(req.rider._id, {
        withdrawMethod,
      });

      res.status(201).json({
        success: true,
        rider,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// delete rider withdraw merthods --- only rider
router.delete(
  "/delete-withdraw-method/",
  isRider,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const rider = await Rider.findById(req.rider._id);

      if (!rider) {
        return next(new ErrorHandler("Rider not found with this id", 400));
      }

      rider.withdrawMethod = null;

      await rider.save();

      res.status(201).json({
        success: true,
        rider,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;