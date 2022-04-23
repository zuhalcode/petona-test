import { configureStore } from "@reduxjs/toolkit";
import componentReducer from "../features/ComponentSlice";

export const store = configureStore({
  reducer: {
    component: componentReducer,
  },
});
