const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const sellerRoutes = require("./routes/sellerRoutes");
const productroutes = require("./routes/productroutes");
const cartRoutes = require("./routes/cartRoutes");
const addressRoutes = require("./routes/addressRoutes");
const orderRoute = require("./routes/orderRoute");

const connectCloudinary = require("./config/cloudinary");
const { stripeWebhooks } = require("./controllers/orderController");
dotenv.config();
//allow multiple origins
const allowedOrigins = process.env.NODE_ENV === 'production' 
  ? [process.env.FRONTEND_URL] 
  : ["http://localhost:5173", "http://localhost:5174"];
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true })); 

//db connection
connectDB();
connectCloudinary();

// Example route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});
app.use("/api/user", userRoutes);
app.use("/api/seller", sellerRoutes);
app.use("/api/product", productroutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address",addressRoutes);
app.use("/api/order",orderRoute);
// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
