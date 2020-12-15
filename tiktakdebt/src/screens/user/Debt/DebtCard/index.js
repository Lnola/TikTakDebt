import React from "react";
import NumberWithLabel from "../../../../components/common/NumberWithLabel";

const DebtCard = ({ homework }) => {
  return (
    <article>
      <span>{homework.homeworkId}</span>
      <span>{homework.homeworkName}</span>
      <NumberWithLabel number={homework.daysExtended} label="Days extended" />
      <NumberWithLabel number={homework.daysLate} label="Days late" />
    </article>
  );
};

export default DebtCard;
