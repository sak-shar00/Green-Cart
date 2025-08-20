const User = require('../models/User.js');

// Update user Cartdata: /api/cart/update
const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const { userId } = req.body;

    await User.findByIdAndUpdate(userId, { cartItem: cartItems });

    res.json({ success: true, message: "Cart updated" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

module.exports = { updateCart };
