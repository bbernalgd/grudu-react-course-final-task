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
  const { nameText, usernameText, tweetContent, container, flexContainer, imgBasis, imgContainer, imgAvatar } = styles;

  return (
    <>
      <div className={container}>
        <div className={flexContainer}>
          <div className={imgBasis}>
            <div className={imgContainer}>
              <img className={imgAvatar} src={avatar}/>
            </div>
          </div>
          <div>
            <p className={nameText}>{name}</p>
            <p className={usernameText}>@{username}</p>
            <div className={tweetContent}>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
