import React from "react";
import DebtCard from "./DebtCard";

const Debt = () => {
  const debt = {
    homeworks: [
      {
        homeworkId: 1,
        homeworkName: "OOP uvod",
        daysExtended: 1,
        daysLate: 2,
      },
      {
        homeworkId: 2,
        homeworkName: "OOP napredno",
        daysExtended: 0,
        daysLate: 4,
      },
      {
        homeworkId: 3,
        homeworkName: "SQL",
        daysExtended: 0,
        daysLate: 0,
      },
    ],
    total: 5,
  };

  return (
    <>
      {debt.homeworks.map((homework, index) => (
        <DebtCard key={index} homework={homework} />
      ))}
      <span>Total debt: {debt.total}</span>
    </>
  );
};

export default Debt;
