import { configureStore } from "@reduxjs/toolkit";
import { jobSlice } from "../features/jobs/jobSlice";

export const store = configureStore({
  reducer: jobSlice.reducer,
});
