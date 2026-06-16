import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addJob } from "../jobSlice";
function JobForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addJob(data));
  };
  return (
    <div>
      <h2>job form here</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Company Name</label>
        <input
          type="text"
          {...register("companyName", { required: "Must fill company name" })}
        />
        {errors.companyName && <p>{errors.companyName.message}</p>}
        <label>Role</label>
        <input
          type="text"
          {...register("role", { required: "Please define your role" })}
        />
        {errors.role && <p>{errors.role.message}</p>}
        <select {...register("status")}>
          <option defaultValue={""} value="">
            Select status
          </option>
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
