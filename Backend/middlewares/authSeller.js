const jwt = require('jsonwebtoken');

const authSeller = async (req, res, next) => {
  const { sellerToken } = req.cookies; // ✅ fixed 'req.cookie' to 'req.cookies'

  if (!sellerToken) {
    return res.json({ success: false, message: "Not authorized" });
  }

  try {
    const tokenDecode = jwt.verify(sellerToken, process.env.JWT_SECRET);

    if (tokenDecode.email === process.env.SELLER_EMAIL) {
      next(); // ✅ authorized
    } else {
      return res.json({ success: false, message: "Invalid seller" });
    }

  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

module.exports = authSeller; // ✅ fixed typo (was module.export)
