import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice.js'
import guestReducer from './guestSlice.js'
import menuReducer from './menuSlice.js'
const store = configureStore({
    reducer : {
        auth : authReducer,
        guest : guestReducer,
        menu : menuReducer
    }
})

console.log(store)
export default store