import React from "react";

const style = {
  btn: "w-fit cursor-pointer text-white bg-sky-500\
  hover:bg-sky-600 focus:ring-1 focus:ring-blue-100\
  font-medium rounded-full text-sm px-5 py-2.5 mr-2\
  my-3 ml-auto disabled:cursor-default disabled:hover:bg-sky-500\
  disabled:opacity-60 disabled:focus:opacity-60",
};

type props = {
  btnText: string
}

export const SubmitBtn = ({ btnText }: props) => (
  <input className={style.btn} type="submit" value={btnText} />
);