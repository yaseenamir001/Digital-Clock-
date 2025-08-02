import React, { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    const pad = (n) => (n < 10 ? "0" + n : n);
    return {
      timeStr: `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`,
      ampm,
    };
  };

  const { timeStr, ampm } = formatTime();
  return (
    <h1 className="fw-bold display-3 d-flex justify-content-center align-items-start gap-2 flex-wrap">
      {timeStr}
      <span className="fs-4 align-self-start">{ampm}</span>
    </h1>
  );
}

export default Clock;
