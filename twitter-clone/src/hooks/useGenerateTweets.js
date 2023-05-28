import { useFetch } from "./useFetch";

export const useGenerateTweets = (user, content) => {
  const [userData] = useFetch(user);
  const [tweetData] = useFetch(content);

  const tweet = userData?.results?.map((user, index) => {
    return {
      id: tweetData[index]?._id,
      name: `${user.name.first} ${user.name.last}`,
      username: user.login.username,
      avatar: user.picture.thumbnail,
      content: tweetData[index]?.content,
    };
  });

  return [tweet];
};
