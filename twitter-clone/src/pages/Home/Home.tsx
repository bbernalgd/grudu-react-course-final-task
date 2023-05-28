import React, { useEffect, useState } from "react";
import { Tweet, TweetProps } from "../../components/Tweet/Tweet";
import { TweetForm } from "../../components/forms";
import { Spinner } from "../../components/Spinner/Spinner";

import { useGenerateTweets } from "../../hooks/useGenerateTweets";

const styles = {
  container: "flex flex-col mx-auto max-w-xl",
};

export const Home = () => {
  const numberOfTweets = 30;
  const [isLoading, setIsLoading] = useState(true);
  const [data] = useGenerateTweets(
    `https://randomuser.me/api/?results=${numberOfTweets}&inc=name,picture,login`,
    `https://api.quotable.io/quotes/random?minLength=100&maxLength=140&limit=${numberOfTweets}`
  );

  useEffect(() => {
    if (data) {
      setIsLoading(false);
    }
  }, [data]);

  return (
    <div className={styles.container}>
      <TweetForm />
      {isLoading ? (
        <Spinner/>
      ) : (
        data.map((user: TweetProps) => {
          return (
            <Tweet key={user.id} name={user.name} username={user.username} avatar={user.avatar} content={user.content}/>
          );
        })
      )}
    </div>
  );
};
