import React from "react";

function DateDisplay({ date }) {
  const day = date.toLocaleDateString(undefined, { weekday: "long" });
  const dayNumber = date.getDate();
  const month = date.toLocaleDateString(undefined, { month: "long" });
  const year = date.getFullYear();

  return (
    <p className="mt-3 fs-5 fw-medium">
      {day} &nbsp; {dayNumber} {month}, {year}
    </p>
  );
}

export default DateDisplay;
