import React from "react";

const Calendar = () => {
  const homeworks = [
    {
      id: 1,
      name: "OOP",
      initialDay: "today",
      finalDay: "yesterday",
      daysExtended: 2,
      daysLate: 2,
      githubLink: ".....",
    },
  ];
  return (
    <>
      {homeworks.map((homework, index) => (
        <React.Fragment key={index}>{homework.name}</React.Fragment>
      ))}
    </>
  );
};

export default Calendar;
