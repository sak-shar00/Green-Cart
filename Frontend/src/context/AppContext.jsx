import { createContext, useContext,useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";
import axios from "axios"
axios.defaults.withCredentials=true;
axios.defaults.baseURL=import.meta.env.VITE_BACKEND_URL
export const AppContext =createContext();
export const AppContextProvider=({children})=>{
    const currency = import.meta.env.VITE_CURRENCY;

    const navigate=useNavigate();
    const [user,setUser]=useState(null);
    const [isSeller,setIsSeller]=useState(false);
    const [showUserLogin,setShowUserLogin]=useState(false);
    const [products,setProducts]=useState([]);
    const [cartItems,setCartItems]=useState({});
    const [searchQuery,setSearchQuery]=useState({});

    //fetch Seller status
    const fetchSeller=async()=>{
      try{
const {data}=await axios.get('/api/seller/is-auth');
if(data.success){
  setIsSeller(true)
}
else{
  setIsSeller(false)
}
      }
      catch(error){
  setIsSeller(false)
      }

    }
    //fetch user Auth status ,user data and cart items
    const fetchUser=async()=>{
      try{
const {data}=await axios.get('/api/user/is-auth');
if(data.success){
  setUser(data.user);
  setCartItems(data.user.cartItem || {})
}
      }
      catch(error){
        setUser(null)
        setCartItems({})
      }
    }


//fetching all the products
    const fetchProducts=async()=>{
      try{
const {data}= await axios.get('/api/product/list');
if(data.success){
  setProducts(data.products)
}
else{
  toast.error(data.message);
}
      }
      catch(error){
  toast.error(error.message);
      }
    }

// Add product to cart
const addProduct = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
    toast.success("Added to Cart");
  };
  
  // Update item quantity
  const updateCartItems = async (itemId, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId] = quantity;
    setCartItems(cartData);
    toast.success("Cart Updated");
  };
  
  // Remove product from cart
  const removeCartItems = async (itemId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
    }
    if (cartData[itemId] === 0) {
      delete cartData[itemId];
    }
    setCartItems(cartData);
    toast.success("Removed from cart");
  };
 // Get total cart item count
const getCartCount = () => {
  let totalCount = 0;
  if (cartItems && typeof cartItems === 'object') {
    for (const items in cartItems) {
      totalCount += cartItems[items];
    }
  }
  return totalCount;
};

// Get total cart amount
const getCartAmount = () => {
  let totalAmount = 0;
  if (cartItems && typeof cartItems === 'object') {
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      if (itemInfo && cartItems[items] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[items];
      }
    }
  }
  return Math.floor(totalAmount * 100) / 100; // Round to 2 decimal places
};



useEffect(()=>{
  fetchUser();
  fetchSeller();
fetchProducts();
    },[])
    //update database cart Items
    useEffect(()=>{
const updateCart=async()=>{
  try{
const {data}=await axios.post('/api/cart/update',{cartItems});
if(!data.success){
  toast.error(data.message)
}
  }
  catch(error){
 toast.error(error.message)
  }
}
if(user && Object.keys(cartItems).length >= 0){
  updateCart();
}
    },[cartItems, user])

    const value={navigate,user,setUser,isSeller,setIsSeller,showUserLogin,setShowUserLogin,products,setProducts,currency,addProduct,updateCartItems,removeCartItems,cartItems,searchQuery,setSearchQuery,getCartAmount,getCartCount,axios,fetchProducts,setCartItems}

    return<AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export const useAppContext=()=>{ //just import useAppContext in any component to access the states and value 
return useContext(AppContext)
}
