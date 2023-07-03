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
    <div className="flex flex-col flex-1 sm:flex-grow-0 basis-20 sm:basis-15">
      <label className="font-bold text-gray-500 uppercase -tracking-tighter">
        {dateValue}
      </label>

      {name === "Month" && (
        <input
          onChange={onChange}
          name={name}
          min={1}
          max={12}
          value={value}
          className="w-full p-2 text-lg font-bold text-black border border-gray-200 rounded-md outline-2 outline-purple-900"
          type={type}
        />
      )}
      {name === "Year" && (
        <input
          onChange={onChange}
          name={name}
          value={value}
          min={1850}
          max={2023}
          className="w-full p-2 text-lg font-bold text-black border border-gray-200 rounded-md outline-2 outline-purple-900"
          type={type}
        />
      )}
      {name === "Day" && (
        <input
          onChange={onChange}
          name={name}
          value={value}
          min={1}
          max={31}
          className="w-full p-2 text-lg font-bold text-black border border-gray-200 rounded-md outline-2 outline-purple-900"
          type={type}
        />
      )}
    </div>
  );
};
export default InputBox;
