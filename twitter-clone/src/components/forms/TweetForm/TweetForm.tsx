import React from "react";
import logo from "../../../assets/img/twitter-logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../../buttons/SubmitBtn";
import { styles } from "./styles"

interface IFormInputs {
  id: string;
  message: string;
  user_id: string;
}

export const TweetForm = () => {
  const { register, handleSubmit } = useForm<IFormInputs>({
    defaultValues: {
      id: "",
      message: "",
      user_id: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formContainer}>
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <div className={styles.textAreaContainer}>
          <div className={styles.imgContainer}>
            <img
              className={styles.userImg}
              src={logo}
              alt="image description"
            />
          </div>
          <textarea
            {...register("message")}
            name="message"
            id="message"
            rows={4}
            className={styles.textArea}
            placeholder="Write your thoughts here..."
          />
        </div>
        <SubmitBtn text="Tweet"/>
      </div>
    </form>
  );
};
