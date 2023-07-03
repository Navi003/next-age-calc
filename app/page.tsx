"use client";
import Container from "@/components/Container";
import InputForm from "@/components/InputForm";
import OutPutField from "@/components/OutPutField";

import { ChangeEvent, FormEvent, useState } from "react";
import { Data, calculateAge } from "@/lib/calc";
export default function Home() {
  const [formData, setFormData] = useState<Data>({
    Day: "",
    Month: "",
    Year: "",
  });
  const [outPutformData, setOutPutFormData] = useState({
    Day: 0,
    Month: 0,
    Year: 0,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const newFormData: Data = { ...formData };
    newFormData[name] = value; // Dynamic key access Plese add [key: string]: string to your type so it can acces key as string
    setFormData(newFormData);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    const currentAge = calculateAge(
      `${formData.Year.toString()}-${formData.Month.toString()}-${formData.Day.toString()}`
    );
    console.log(currentAge, "😍");
    setOutPutFormData(currentAge);
  };

  return (
    <main>
      <Container>
        <InputForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formData={formData}
        />
        <div className="mt-6">
          <OutPutField type="Years" value={outPutformData.Year} />
          <OutPutField type="Month" value={outPutformData.Month} />
          <OutPutField type="Day" value={outPutformData.Day} />
        </div>
      </Container>
    </main>
  );
}
