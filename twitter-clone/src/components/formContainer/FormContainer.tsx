import React from "react";

const styles = {
  container: "flex flex-col mx-auto max-w-xl mt-14",
  title: "text-xl md:text-3xl text-center text-white my-8"
}

type props = {
  title: string;
  children: React.ReactElement;
}

export const FormContainer = ({title, children}:props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};
