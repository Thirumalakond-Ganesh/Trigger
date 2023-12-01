import React from "react";
import { useForm } from "react-hook-form";
import './App.css'
function App() {
  const {
    register,
    formState: { errors },
    trigger,
    handleSubmit,
    clearErrors
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First name: </label>
      <input {...register("firstName", { required: true })} />
      {errors.firstName && <p>This field is Required</p>}

      <label>Last name: </label>
      <input {...register("lastName", { required: true })} />
      {errors.lastName && <p>This field is Required</p>}

      <label>Username: </label>
      <input {...register("username", { required: true })} />
      {errors.username && <p>This field is Required</p>}
      <button
        type="button"
        onClick={() => {
          clearErrors();
        }}
      >
        Clear Errors
      </button>
      <input type="submit" />
      <button
        type="button"
        onClick={() => {
          trigger();
        }}
      >
        Validate All
      </button>
      <button
        type="button"
        onClick={() => {
          trigger("firstName");
        }}
      >
        Validate First Name
      </button>
      <button
        type="button"
        onClick={() => {
          trigger(["firstName", "lastName"]);
        }}
      >
        Validate First And Last Name
      </button>
      <button
        type="button"
        onClick={async () => {
          console.log("firstName", await trigger("firstName"));
        }}
      >
        Trigger Async First Name Validation
      </button>
    </form>
  );
}
export default App