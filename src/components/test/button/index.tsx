import type React from "react";

type Props = {
  children: React.ReactNode;
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <button type="button" onClick={() => console.log("test")}>
      {children}
    </button>
  );
};
