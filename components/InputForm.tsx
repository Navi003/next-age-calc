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
      className="flex flex-col items-center justify-center max-w-full gap-12 mt-3 "
    >
      <div className="flex w-full gap-4">
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

      <button className="w-16 h-16 text-white bg-purple-900 rounded-full ">
        V
      </button>
    </form>
  );
};
export default InputForm;
