const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    description: {
      type: Array,
      required: true,
    },

    price: {
      type: Number,
      required: true
    },
        offerPrice: {
      type: Number,
      required: true
    },
    image: {
      type:Array,
      required: true
    },

    category: {
      type:String,
      required: true
    },
  instock:{
    type:Boolean,
    default:true
  }
  },
  {

    timestamps: true  // ✅ Optional: adds createdAt and updatedAt
  }
);

const Product = mongoose.models.product||mongoose.model('product', productSchema);

module.exports = Product;
