import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../buttons/SubmitBtn";

const styles = {
  container: "max-w-2xl text-lg p-4 text-white",
  form: "flex flex-col",
  input:
    "mt-4 bg-gray-900 border-gray-800 placeholder-gray-400\
    rounded-md focus:border-sky-500",
  link: "text-sky-500 hover:border-sky-500 hover:border-b",
  p: "text-base",
  error: "text-red-600 text-base font-light pl-2 mt-2",
  inputError:
    "placeholder-red-600 border-red-600 rounded-md\
    mt-4 bg-gray-900 border-gray-800 focus:border-red-600\
    focus:ring-red-600",
};

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
    <>
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
          <SubmitBtn btnText="Log In" />
        </form>
        <p className={styles.p}>
          Don’t have an account?{" "}
          <a className={styles.link} href="">
            Sign Up
          </a>
        </p>
      </div>
    </>
  );
}
