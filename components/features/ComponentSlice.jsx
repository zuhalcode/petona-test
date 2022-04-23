import { createSlice } from "@reduxjs/toolkit";

const ComponentSlice = createSlice({
  name: "component",
  initialState: {
    login: false,
    status: false,
    nav: false,
    button: {
      bg: { green: "bg-[green]", white: "bg-white" },
      text: { green: "text-[green]", white: "text-white", custom: "text-[#00985B]" },
    },
    user: "",
  },
  reducers: {
    update: (state, action) => {
      state.login = action.payload.login;
      state.status = action.payload.status;
      state.nav = action.payload.nav;
      state.user = action.payload.user;
    },
  },
});

export const { update } = ComponentSlice.actions;
export default ComponentSlice.reducer;
