import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"; // Make sure the path is correct

// Configure the store and add reducers
const store = configureStore({
    reducer: {
        auth: authReducer, // Attach the auth slice reducer to "auth" key
    },
});

export default store;
