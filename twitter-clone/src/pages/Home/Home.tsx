import React from "react";
import { Tweet } from "../../components/Tweet/Tweet";
import { TweetForm } from "../../components/forms/TweetForm";

export const Home = () => {
  return (
    <div className="flex flex-col mx-auto max-w-xl">
      <dl className="mx-auto max-w-xl">
        <TweetForm />
        <Tweet />
      </dl>
    </div>
  );
};
