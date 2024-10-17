import { configureStore } from "@reduxjs/toolkit"
import productSlice from './Slice/productSlice'
import WishListSlice from './Slice/WishListSlice'
import CartSlice from './Slice/CartSlice'





const cartStore = configureStore({
    reducer:{
        productReducer:productSlice,
        WishlistReducer:WishListSlice,
        CartReducer:CartSlice

    }

})
export default cartStore