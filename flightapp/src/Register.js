import { useForm } from "react-hook-form";
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onFormSubmit = (userData) => {
    console.log(userData);
  };
  return (
    <div className="col-11 col-sm-8 col-md-6 mx-auto mt-3">
      <div className="display-3 text-success mt-1 mb-0">User Registration</div>
      <form onSubmit={handleSubmit(onFormSubmit)} className="mt-5">

        <div className="mb-0">
          <label htmlFor="user">Username</label>
          <input
            type="text"
            id="user"
            className="form-control"
            {...register("username", { required: true, minLength: 4 })}
          />
          {errors.username?.type === "required" && (
            <p className="text-danger">*Username required</p>
          )}
          {errors.username?.type === "minLength" && (
            <p className="text-danger">*Min length is 4</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && (
            <p className="text-danger">*Email is required</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            className="form-control"
            {...register("dob", { required: true })}
          />
          {errors.dob?.type === "required" && (
            <p className="text-danger">*Date of Birth required</p>
          )}
        </div>
        <div className="mb-3">
          <label>Gender</label>
          <div className="">
            <div className="form-check d-flex">
              <input
                type="radio"
                id="male"
                className="form-check-input"
                {...register("gender", { required: true })}
                value="male"
              />
              <label htmlFor="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="form-check d-flex">
              <input
                type="radio"
                id="female"
                className="form-check-input"
                {...register("gender", { required: true })}
                value="female"
              />
              <label htmlFor="female" className="form-check-label">
                Female
              </label>
            </div>
          </div>
          {errors.gender?.type === "required" && (
            <p className="text-danger">*Gender required</p>
          )}
        </div>
        <button type="submit" className="btn btn-success w-50">
          Register
        </button>
      </form>
    </div>
  );
}
export default Register;
