import { useDispatch } from "react-redux";
import { removeJob, updateStatus } from "../jobSlice";

function JobCard({ companyName, role, id, date, status }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Company Name: {companyName}</h3>
      <p>Role: {role}</p>
      <p>Date: {date}</p>
      <select
        value={status}
        onChange={(e) =>
          dispatch(updateStatus({ id: id, status: e.target.value }))
        }
      >
        <option value="newApply">New Apply</option>
        <option value="selected">Selected</option>
        <option value="pending">Pending</option>
        <option value="rejected">Rejected</option>
      </select>
      <button onClick={() => dispatch(removeJob(id))}>Delete</button>
    </div>
  );
}

export default JobCard;
