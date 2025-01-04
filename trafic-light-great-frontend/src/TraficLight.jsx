import { useState, useEffect } from "react";
export default function TrafficLight() {
  const [activeLight, setActiveLight] = useState("green");
  const [traficLights, setTraficLights] = useState({
    red: {
      next: "yellow",
      time: 4,
    },
    yellow: {
      next: "green",
      time: 0.5,
    },
    green: {
      next: "red",
      time: 3,
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveLight(traficLights[activeLight].next);
    }, traficLights[activeLight].time * 1000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className="trafic-light-container">
      <div className={activeLight === "red" ? "item red" : "item"}></div>
      <div className={activeLight === "yellow" ? "item yellow" : "item"}></div>
      <div className={activeLight === "green" ? "item green" : "item"}></div>
    </div>
  );
}
