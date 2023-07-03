import { ChangeEvent, FC, FormEvent } from "react";
import React from "react";
import InputBox from "./InputBox";
import { Data } from "@/lib/calc";

interface PropTypes {
  handleChange: any;
  handleSubmit: any;
  formData: Data;
}
const InputForm: FC<PropTypes> = ({
  handleChange,
  handleSubmit,
  formData,
}): JSX.Element => {
  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col items-center justify-center max-w-full gap-12 mt-3 "
    >
      <div className="flex w-full gap-4 sm:justify-start">
        <InputBox
          onChange={handleChange}
          value={formData.Day}
          dateValue="Day"
          type="number"
          name="Day"
        />
        <InputBox
          onChange={handleChange}
          value={formData.Month}
          dateValue="Month"
          type="number"
          name="Month"
        />
        <InputBox
          onChange={handleChange}
          value={formData.Year}
          dateValue="Year"
          type="number"
          name="Year"
        />
      </div>

      <button className="w-16 h-16 sm:ml-[80%] flex justify-center items-center relative z-50 text-white bg-purple-700 rounded-full ">
        <img src="icon-arrow.svg" className="w-[50%]" />
      </button>
      <hr className="absolute left-0 w-full border border-gray-200 top-36 " />
    </form>
  );
};
export default InputForm;
