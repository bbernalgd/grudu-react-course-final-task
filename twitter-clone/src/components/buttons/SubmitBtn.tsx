import React from "react";

const styles = {
  btn: "w-fit cursor-pointer text-white bg-sky-500\
  hover:bg-sky-600 focus:ring-1 focus:ring-blue-100\
  font-medium text-sm rounded-full px-5 py-2.5 mr-2\
  my-3 ml-auto disabled:cursor-default disabled:hover:bg-sky-500\
  disabled:opacity-60"
};

type props = {
  text: string;
};

export const SubmitBtn = ({ text }: props) => (
  <input className={styles.btn} type="submit" value={text} disabled={true} />
);