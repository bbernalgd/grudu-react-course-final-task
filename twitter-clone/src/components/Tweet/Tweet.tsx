import React from "react";
import { styles } from "./styles";

export interface TweetProps {
  id?: string,
  name: string;
  username: string;
  avatar: string;
  content: string;
}

export const Tweet = ({ name, username, avatar, content }: TweetProps) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.imgBasis}>
            <div className={styles.imgContainer}>
              <img className={styles.imgAvatar} src={avatar} alt="image description" />
            </div>
          </div>
          <div>
            <p className={styles.name}>{name}</p>
            <p className={styles.username}>@{username}</p>
            <div className={styles.tweetContent}>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
