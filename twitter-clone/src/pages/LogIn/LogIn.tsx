import React from 'react'
import { LogInForm } from '../../components/forms/LogInForm';

export const LogIn = () => {
  return (
    <div className="flex flex-col mx-auto max-w-xl mt-14">
      <h1 className="text-xl md:text-3xl text-center text-white my-8">
        Sign in to Twitter
      </h1>
      <LogInForm />
    </div>
  );
}
