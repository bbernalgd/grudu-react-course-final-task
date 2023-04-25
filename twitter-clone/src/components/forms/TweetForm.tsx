import React from "react";
import logo from "../../assets/img/twitter-logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { SubmitBtn } from "../buttons/SubmitBtn";

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
    <form
      className="p-4 border-b border-x border-slate-800"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col sm:col-span-2">
        <label htmlFor="message" className="hidden">
          Message
        </label>
        <div className="mt-2.5">
          <div className="flex gap-x-4">
            <div className="basis-1/8 rounded-full min-w-fit">
              <img
                className="mx-auto h-12 w-12"
                src={logo}
                alt="image description"
              />
            </div>
            <textarea
              {...register("message")}
              name="message"
              id="message"
              rows={4}
              className="block resize-none p-2.5 w-full text-md border-t-0 border-x-0 focus:ring-sky-600 
              focus:border-sky-600 bg-gray-900 border-gray-800 placeholder-gray-400 text-white dark:focus:ring-sky-600 dark:focus:border-sky-600"
              placeholder="Write your thoughts here..."
            />
          </div>
        </div>
        <SubmitBtn btnText="Tweet"/>
      </div>
    </form>
  );
};
