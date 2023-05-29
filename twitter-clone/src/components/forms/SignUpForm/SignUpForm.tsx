import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../../buttons/SubmitBtn";
import { styles } from "./styles";

interface FormInputs {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const {container, form, input, link, p, error, inputError} = styles;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (formData) => {
    const data = {
      ...formData,
      id: uuidv4().slice(0, 8),
      tweets: [],
    };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    reset({
        id: "",
        name: "",
        username: "",
        email: "",
        password: "",
      },
    );
  };

  return (
    <>
      <div className={container}>
        <form className={form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className={!errors.email ? input : inputError}
          />
          {errors.email && (
            <p className={error}>Please enter a valid email.</p>
          )}
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: true, min: 1, maxLength: 15 })}
            className={!errors.username ? input : inputError}
          />
          {errors.username && (
            <p className={error}>Please enter a valid username.</p>
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
            <p className={error}>Please enter a valid password.</p>
          )}
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true, min: 1, maxLength: 512 })}
            className={!errors.name ? input : inputError}
          />
          {errors.name && <p className={error}>What’s your name?</p>}
          <SubmitBtn text="Sign Up" />
        </form>
        <p className={p}>
          Already have an account?{" "}
          <Link to="/login" className={link}>
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};
