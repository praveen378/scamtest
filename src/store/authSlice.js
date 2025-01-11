import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false, // Represents whether the user is logged in
    userData: null, // Stores user details after login
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload; // Stores user data from the action payload
        },
        logout: (state) => {
            state.status = false;
            state.userData = null; // Clears user data on logout
        },
    },
});

// Export actions
export const { login, logout } = authSlice.actions;

// Export reducer as default
export default authSlice.reducer;
