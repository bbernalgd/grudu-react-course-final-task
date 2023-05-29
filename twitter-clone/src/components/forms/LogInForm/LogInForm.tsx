import React from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../../buttons/SubmitBtn";
import { styles } from "./styles";

interface FormInputs {
  email: string;
  password: string;
}

export const LogInForm = () => {
  const { container, form, input, link, p, error, inputError } = styles;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    console.log(formData);
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.user));
  };

  return (
    <div className={container}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, min: 1, maxLength: 15 })}
          className={!errors.email ? input : inputError}
        />
        {errors.email && (
          <p className={error}>Please enter a valid email.</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            min: 8,
            maxLength: 256,
          })}
          className={!errors.password ? input : inputError}
        />
        {errors.password && (
          <p className={error}>Please enter your password.</p>
        )}
        <SubmitBtn text="Log In" />
      </form>
      <p className={p}>
        Don’t have an account?{" "}
        <Link to="/signup" className={link}>
          Sign Up
        </Link>
      </p>
    </div>
  );
};
