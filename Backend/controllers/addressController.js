// Import the Address model
const Address = require('../models/Address'); // ✅ Adjust the path if your model is elsewhere

// POST: /api/address/add
const addAddress = async (req, res) => {
  try {
    const { address } = req.body;
    const userId = req.userId;

    // Create a new address with userId field
    await Address.create({ ...address, userId });

    res.json({ success: true, message: "Address added successfully" });
  } catch (error) {
    console.log("Add Address Error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

// GET: /api/address/get
const getAddress = async (req, res) => {
  try {
    const userId = req.userId;

    // Fetch all addresses for the given user
    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log("Get Address Error:", error.message);
    res.json({ success: false, message: error.message });
  }
};

module.exports = { addAddress, getAddress };
