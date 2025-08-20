const jwt = require('jsonwebtoken');

//loginseller:/api/seller/login
const sellerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (
      password === process.env.SELLER_PASSWORD &&
      email === process.env.SELLER_EMAIL
    ) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '15d',
      });

      res.cookie('sellerToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.json({ success: true, message: 'Logged in' });
    } else {
      return res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};


    //Sellerauth:/api/seller/is-auth
    const isSellerAuth = async (req, res) => {
      try {
      
        return res.json({ success: true});
      } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
      }
    };

    // logout seller:/api/seller/logout
    const logoutSeller=async(req,res)=>{
    try{
    res.clearCookie('sellerToken',{
      httpOnly:true,
      secure:process.env.NODE_ENV==='production',
         sameSite:process.env.NODE_ENV==='production' ? 'none':'strict',
    })
    return res.json({success:true,message:"Logout"})
    }
    catch(error){
    console.log(error.message);
    res.json({success:false,message:error.message});
    }
    }
    
module.exports = {
 isSellerAuth,
 sellerLogin,
 logoutSeller
};