import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return <button onClick={() => console.log("test")}>{children}</button>;
};
