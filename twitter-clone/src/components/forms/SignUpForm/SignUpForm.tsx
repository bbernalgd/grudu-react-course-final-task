import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../../buttons/SubmitBtn";
import { styles } from "./styles";

interface IFormInputs {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    defaultValues: {
      id: "",
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className={!errors.email ? styles.input : styles.inputError}
          />
          {errors.email && (
            <p className={styles.error}>Please enter a valid email.</p>
          )}
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
            <p className={styles.error}>Please enter a valid password.</p>
          )}
          <input
            type="text"
            placeholder="Full Name"
            {...register("name", { required: true, min: 1, maxLength: 512 })}
            className={!errors.name ? styles.input : styles.inputError}
          />
          {errors.name && <p className={styles.error}>What’s your name?</p>}
          <SubmitBtn text="Sign Up" />
        </form>
        <p className={styles.p}>
          Already have an account?{" "}
          <a className={styles.link} href="">
            Log in
          </a>
        </p>
      </div>
    </>
  );
};
