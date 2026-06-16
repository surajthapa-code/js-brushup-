import JobCard from "./JobCard";
import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../jobSlice";

function JobList() {
  const alljobs = useSelector((state) => state.jobs.jobs);
  const filter = useSelector((state) => state.jobs.filter);

  const dispatch = useDispatch();
  const visibleJobs =
    filter === "all" ? alljobs : alljobs.filter((job) => job.status === filter);
  const filters = ["all", "newApply", "selected", "pending", "rejected"];
  return (
    <>
      <br />
      <h2>job list here</h2>
      {filters.map((stats) => (
        <button key={stats} onClick={() => dispatch(setFilter(stats))}>
          {" "}
          {stats}
        </button>
      ))}
      {visibleJobs.map((job) => {
        return (
          <div key={job.id}>
            <JobCard
              id={job.id}
              companyName={job.companyName}
              role={job.role}
              status={job.status}
              date={job.date}
            />
          </div>
        );
      })}
    </>
  );
}

export default JobList;
