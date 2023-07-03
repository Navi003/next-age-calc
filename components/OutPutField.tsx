import { FC } from "react";
import React from "react";
interface PropTypes {
  value: string | number;
  type: string | number;
}
const OutPutField: FC<PropTypes> = ({ value, type }): JSX.Element => {
  return (
    <h3>
      <span className="text-5xl italic font-extrabold text-purple-900 sm:text-7xl">
        {value}
      </span>
      <span className="ml-3 text-5xl italic font-extrabold text-black sm:text-7xl">
        {type}
      </span>
    </h3>
  );
};
export default OutPutField;
