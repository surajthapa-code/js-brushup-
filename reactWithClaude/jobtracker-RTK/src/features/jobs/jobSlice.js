import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobs: [],
  filter: "all",
};
export const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobs.push({
        ...action.payload,
        id: Date.now(),
        date: new Date().toLocaleDateString(),
      });
    },
    removeJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    updateStatus: (state, action) => {
      const job = state.jobs.find((job) => job.id === action.payload.id);
      if (job) {
        job.status = action.payload.status;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addJob, removeJob, updateStatus, setFilter } = jobSlice.actions;
export default jobSlice.reducer;
