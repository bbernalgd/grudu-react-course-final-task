import React from "react";
import { SignUpForm } from "../../components/forms/SignUpForm";

export const SignUp = () => {
  return (
    <div className="flex flex-col mx-auto max-w-xl mt-14">
      <h1 className="text-xl md:text-3xl text-center text-white my-8">
        Join Twitter today
      </h1>
      <SignUpForm />
    </div>
  );
};
