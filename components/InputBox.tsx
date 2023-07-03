import { FC, HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import React from "react";

interface PropTypes extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  dateValue?: string;
}

const InputBox: FC<PropTypes> = ({
  type,
  dateValue,
  onChange,
  name,
  value,
}): JSX.Element => {
  return (
    <div className="flex flex-col flex-1 basis-20">
      <label className="font-bold text-gray-500 uppercase -tracking-tighter">
        {dateValue}
      </label>
      <input
        onChange={onChange}
        name={name}
        value={value}
        className="w-full p-2 text-lg font-bold text-black border border-gray-200 rounded-md outline-2 outline-purple-900"
        type={type}
      ></input>
    </div>
  );
};
export default InputBox;
