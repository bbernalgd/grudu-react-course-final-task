import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../../buttons/SubmitBtn";
import {styles } from "./styles"

interface IFormInputs {
  username: string;
  password: string;
}

export const LogInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true, min: 1, maxLength: 15 })}
          className={!errors.username ? styles.input : styles.inputError}
        />
        {errors.username && (
          <p className={styles.error}>Please enter a valid username.</p>
        )}
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            min: 8,
            maxLength: 256,
          })}
          className={!errors.password ? styles.input : styles.inputError}
        />
        {errors.password && (
          <p className={styles.error}>Please enter your password.</p>
        )}
        <SubmitBtn text="Log In" />
      </form>
      <p className={styles.p}>
        Don’t have an account?{" "}
        <a className={styles.link} href="">
          Sign Up
        </a>
      </p>
    </div>
  );
};
