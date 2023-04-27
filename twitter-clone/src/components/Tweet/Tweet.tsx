import React from "react";
import logo from "../../assets/img/twitter-logo.png";
import {styles} from "./styles"

const features = [
  {
    username: "Push to deploy",
    description:
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: logo,
  },
  {
    username: "SSL certificates",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
    icon: logo,
  },
];

export const Tweet = () => {
  return (
    <>
      {features.map((feature) => (
        <div key={feature.username} className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.imgBasis}>
              <div className={styles.imgContainer}>
                <img src={feature.icon} alt="image description" />
              </div>
            </div>
            <div>
              <p className={styles.username}>{feature.username}</p>
              <div className={styles.tweetContent}>
                <p>{feature.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
