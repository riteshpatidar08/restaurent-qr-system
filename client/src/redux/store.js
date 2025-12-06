import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
import guestReducer from './guestSlice.js'
const store = configureStore({
    reducer : {
        auth : authReducer,
        guest : guestReducer
    }
})

console.log(store)
export default store