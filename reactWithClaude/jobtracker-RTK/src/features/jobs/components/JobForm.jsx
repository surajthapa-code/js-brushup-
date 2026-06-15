import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addJob } from "../jobSlice";
function JobForm() {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    dispatch(addJob(data));
  };
  return (
    <div>
      <h2>job form here</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Company Name</label>
        <input type="text" {...register("companyName")} />
        <label>Role</label>
        <input type="text" {...register("role")} />
        <select {...register("status")}>
          <option value="">Select status</option>
          <option value="newApply">new apply</option>
          <option value="selected">selected</option>
          <option value="pending">pending</option>
          <option value="rejected">rejected</option>
        </select>

        <input type="submit" />
      </form>
    </div>
  );
}

export default JobForm;
