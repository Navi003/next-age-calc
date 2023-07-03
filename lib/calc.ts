export interface Data {
  Day: string;
  Month: string;
  Year: string;
  [key: string]: string;
}

interface Age {
  Day: number;
  Month: number;
  Year: number;
}

export function calculateAge(dateOfBirth: string): Age {
  const dob: Date = new Date(dateOfBirth);
  const currentDate: Date = new Date();

  const ageInMilliseconds: number = currentDate.getTime() - dob.getTime();

  const millisecondsPerYear: number = 1000 * 60 * 60 * 24 * 365.25;
  const years: number = Math.floor(ageInMilliseconds / millisecondsPerYear);
  const remainingMilliseconds: number = ageInMilliseconds % millisecondsPerYear;
  const millisecondsPerMonth: number = millisecondsPerYear / 12;
  const months: number = Math.floor(
    remainingMilliseconds / millisecondsPerMonth
  );
  const remainingMilliseconds2: number =
    remainingMilliseconds % millisecondsPerMonth;
  const millisecondsPerDay: number = 1000 * 60 * 60 * 24;
  const days: number = Math.floor(remainingMilliseconds2 / millisecondsPerDay);

  // Return the age as an object
  return {
    Day: days,
    Month: months,
    Year: years,
  };
}
