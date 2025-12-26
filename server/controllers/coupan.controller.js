import Coupan from './../models/coupan.js';
import Cart from '../models/cart.js';
//getallcoupan agar order = 0 first30
export const getAllCoupans = async (req, res) => {
  try {
    const { cartTotal } = req.query;
    const userId = req.user.id;

    //user cart fetch //totalCartPrice ;
    const cart = await Cart.findOne({ userId });
    let totalCartPrice;
    if (cart) {
      totalCartPrice = cart.totalCartPrice;
    }
    console.log(totalCartPrice);

    //how to fetch all coupans than apply map method ;
    const allCoupans = await Coupan.find();
    console.log(allCoupans);

    const AvailableCoupans = allCoupans.filter((coupan) => {
      return (
        totalCartPrice > coupan.minOrderAmount &&
        new Date() > coupan.validFrom &&
        new Date() < coupan.validTo
      );
    });
    // console.log(filteredCoupans)
    //discount value again the totalprice ;
    let totalValueAfterDiscount;
    const CoupansAfterCalculation = AvailableCoupans.map((coupans) => {
      if (coupans.discountType) {
        if (coupans.discountType === 'fixedAmount') {
          totalValueAfterDiscount = totalCartPrice - coupans.discountValue;
        }
        if (coupans.discountType === 'percentage') {
          totalValueAfterDiscount =
            (totalCartPrice * coupans.discountValue) / 100;
        }
        if (
          coupans.maxDiscount &&
          totalValueAfterDiscount > coupans.maxDiscount
        ) {
          totalValueAfterDiscount = coupans.maxDiscount;
        }
      }
      return {
        totalValueAfterDiscount,
        finalAmount: totalCartPrice - totalValueAfterDiscount,
        code: coupans.code,
        discountType: coupans.discountType,
        description: coupans.description,
      };
    });
    //  500 * 10 / 100 => 50
    //1000 * 10 / 100 => 100   maxDiscount = 150
    //2000 * 10 / 200 > maxDiscount = 150
    // disocuntValue = maxDiscount;
    res.json({
      CoupansAfterCalculation,
    });
  } catch (error) {}
};

export const registerCoupan = async (req, res) => {
  try {
    const {
      code,
      discountType,
      maxDiscount,
      validFrom,
      validTo,
      usageLimit,
      minOrderAmount,
      description,
    } = req.body;

    if (!code || !discountType) {
      return res
        .status(400)
        .json({ message: 'Code and discountType are required' });
    }

    const existingCoupan = await Coupan.findOne({ code: code.toUpperCase() });
    if (existingCoupan) {
      return res.status(400).json({ message: 'Coupan code already exists' });
    }

    const coupanData = {
      code: code.toUpperCase(),
      discountType,
      maxDiscount: maxDiscount || null,
      validFrom: validFrom || new Date(),
      validTo: validTo || null,

      usageLimit: usageLimit || null,
      minOrderAmount: minOrderAmount || 0,

      description: description || '',
      isActive: true,
      usedCount: 0,
    };

    const savedCoupan = await new Coupan(coupanData).save();

    res.status(201).json({
      message: 'Coupan created successfully',
      coupan: savedCoupan,
    });
  } catch (error) {
    console.error('Error registering coupan:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
