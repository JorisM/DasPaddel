import React from "react";
import { Units, WaterRower } from "./lib/index";

// waterrower.playRecording('simulationdata');
// console.log('Playing \'simulationdata\'');
let waterrower = new WaterRower({
  datapoints: [
    "ms_distance",
    "m_s_total",
    "m_s_average",
    "total_kcal",
    "stroke_average",
    "workout_stroke",
    "tank_volume",
    "strokes_cnt",
    "stroke_rate",
    "distance",
  ],
  refreshRate: 1000,
  dataDirectory: "data",
});
waterrower.on("initialized", () => {
  console.log("initialized");
  waterrower.reset();
});

export interface MainProps {}

const setWorkout = (waterrower: WaterRower, distance: number) => {
  waterrower.defineDistanceWorkout(distance, Units.Meters);
};

setWorkout(waterrower, 5000);

export const Main = (props: MainProps) => {
  const [distanceData, setDistanceData] = React.useState([]);
  const [msData, setMsData] = React.useState([]);
  const [msAverage, setMsAverage] = React.useState([]);
  const [totalCal, setTotalCal] = React.useState([]);
  const [data, setData] = React.useState([]);

  waterrower.on("data", (d) => {
    // console.log("d", d);
    if (d.name === "distance") {
      setDistanceData([...distanceData, d.value]);
    }
    if (d.name === "m_s_total") {
      setMsData([...msData, d.value]);
    }
    if (d.name === "m_s_average") {
      setMsAverage([...msAverage, d.value]);
    }
    if (d.name === "total_kcal") {
      setTotalCal([...totalCal, d.value]);
    }
    setData([...data, d]);
  });

  return (
    <ul>
      <h1>distance: {distanceData[distanceData.length - 1]}</h1>
      <h1>msData: {msData[msData.length - 1]}</h1>
      <h1>msAverage: {msAverage[msAverage.length - 1]}</h1>
      <h1>totalCal: {totalCal[totalCal.length - 1]}</h1>
      <p>data: {JSON.stringify(data)}</p>
    </ul>
  );
};
