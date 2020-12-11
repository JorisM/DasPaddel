import React from "react";
import { Status } from "../common/types";
import { WaterRower } from "../lib";

export const useWatterrower = (waterrower: WaterRower, setStatus: (status: Status) => void, debug: boolean) => {
  const [distance, setDistance] = React.useState([]);
  const [msData, setMsData] = React.useState([]);
  const [strokeRate, setStrokeRate] = React.useState([]);
  const [totalCal, setTotalCal] = React.useState([]);
  const [data, setData] = React.useState([]);

  const updateApp = (d) => {
    if (d.name === "distance") {
      setDistance(state => [...state, d.value]);
    }
    if (d.name === "m_s_total") {
      setMsData(state => [...state, d.value]);
    }
    if (d.name === "m_s_average") {
      setStrokeRate(state => [...state, d.value]);
    }
    if (d.name === "total_kcal") {
      setTotalCal(state => [...state, d.value]);
    }
    console.log("d", data);
    setData(state => [...state, d]);
  };

  React.useEffect(() => {
    if (debug) {
      setStatus("connected");
      waterrower.startSimulation();
    }
    if (status !== "not-connected") {
      waterrower.on("initialized", () => {
        console.log("initialized");
        setStatus("connected");
        waterrower.reset();
      });
      waterrower.on("close", () => {
        console.log("closed");
        setStatus("not-connected");
      });
      waterrower.on("data", (d) => {
        updateApp(d);
      });
    }
  }, []);

  return {
    distance,
    msData,
    strokeRate,
    data,
    totalCal
  }

}