import React from "react";
import { Tweet } from "../../components/Tweet/Tweet";
import { TweetForm } from "../../components/forms";

const styles = {
  container: "flex flex-col mx-auto max-w-xl",
};

export const Home = () => {
  return (
    <div className={styles.container}>
      <TweetForm />
      <Tweet />
    </div>
  );
};
