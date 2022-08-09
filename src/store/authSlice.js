import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userData: {
    firstName: "",
    lastName: "",
    profile: "",
    email: "",
    role: "",
  },
  permission: 0,
};

export const authSlice = createSlice({
  

  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      //   state.useData = action.payload;
      //   switch (action.payload.role) {
      //     case "student":
      //       state.permission = 0;
      //       break;
      //     case "supervisor":
      //       state.permission = 1;
      //       break;
      //     case "care":
      //       state.permission = 2;
      //       break;
      //     case "headSup":
      //       state.permission = 3;
      //       break;
      //     case "developers":
      //       state.permission = 4;
      //       break;
      //     default:
      //       state.permission = 0;
      //       break;
      //   }
    },
  },
});

export const authAcctions = authSlice.actions;
export default authSlice;
