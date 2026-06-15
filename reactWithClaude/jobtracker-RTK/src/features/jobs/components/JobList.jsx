import JobCard from "./JobCard";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function JobList() {
  const jobs = useSelector((state) => state.jobs);
  console.log(jobs);
  return <div></div>;
}

export default JobList;
