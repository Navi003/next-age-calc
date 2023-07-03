import { Children, FC } from "react";
import React from "react";
interface PropTypes {
  children: React.ReactNode;
}
const Container: FC<PropTypes> = ({ children }): JSX.Element => {
  return (
    <div className=" shadow-md mx-auto w-[90%] sm:w-[35rem] pl-7  rounded-br-[10rem] border-b-lef mt-[5rem] rounded-2xl bg-white p-4 pb-20">
      {children}
    </div>
  );
};
export default Container;
