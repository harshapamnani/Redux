import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./slice";


export const store = configureStore({
  reducer: {
    color: colorReducer,
  },
});


//here colorReducer is the name of the reducers present in the slice
