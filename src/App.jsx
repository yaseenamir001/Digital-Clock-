import React from "react";
import Clock from "./Components/Clock.jsx";
import DateDisplay from "./Components/DateDisplay.jsx";
import bgImage from "./assets/landscape.jpg";

function App() {
  const now = new Date();

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="bg-dark bg-opacity-50 text-white text-center rounded-4 shadow p-4 p-sm-5 w-100 mx-4"
        style={{
          maxWidth: "550px",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.4)",
        }}
      >
        <Clock />
        <DateDisplay date={now} />
      </div>
    </div>
  );
}

export default App;
