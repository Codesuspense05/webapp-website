const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const ErrorHandler = require("../utils/ErrorHandler");
const { isSeller } = require("../middleware/auth");
const barCoupounCode = require("../model/barcouponcode");
const router = express.Router();

// create coupoun code
router.post(
  "/create-barcoupon-code",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const isbarCoupounCodeExists = await barCoupounCode.find({
        name: req.body.name,
      });

      if (isbarCoupounCodeExists.length !== 0) {
        return next(new ErrorHandler("Barcode already exists!", 400));
      }

      const barcoupounCode = await barCoupounCode.create(req.body);

      res.status(201).json({
        success: true,
        barcoupounCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get all coupons of a shop
router.get(
  "/get-barcoupon/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const barcouponCodes = await barCoupounCode.find({ shopId: req.seller.id });
      res.status(201).json({
        success: true,
        barcouponCodes,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// delete coupoun code of a shop
router.delete(
  "/delete-barcoupon/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const barcouponCode = await barCoupounCode.findByIdAndDelete(req.params.id);

      if (!barcouponCode) {
        return next(new ErrorHandler("Coupon code dosen't exists!", 400));
      }
      res.status(201).json({
        success: true,
        message: "Barcode Coupon  deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

// get coupon code value by its name
router.get(
  "/get-barcoupon-value/:name",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const barcouponCode = await barCoupounCode.findOne({ name: req.params.name });

      res.status(200).json({
        success: true,
        barcouponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
