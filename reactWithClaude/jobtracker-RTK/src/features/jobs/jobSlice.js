import { createSlice, nanoid } from "@reduxjs/toolkit";

export const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    items: [],
    filter: "all",
  },
  reducers: {
    addJob: (state, action) => {
      const job = { ...action.payload, key: nanoid() };
      state.items.push(job);
    },
    removeJob: (state, action) => {
      state.items.filter((job) => job.id !== action.payload);
    },
  },
});

export const { addJob, removeJob } = jobSlice.actions;
export default jobSlice.reducer;
