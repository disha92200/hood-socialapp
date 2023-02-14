import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: {},
  },
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = true;
      state.user = action.payload.user;
    },
  },
});
export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
