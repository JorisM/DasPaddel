import { Button } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { WaterRowerContext } from "../../component";
import { WaterRower, Units } from "../lib";

type ChooseProps = {};
export const Choose = (props: ChooseProps) => {
  const { waterrower, status } = React.useContext(WaterRowerContext);
  const setWorkout = (
    waterrower: WaterRower,
    distance: number,
    minutes: number
  ) => {
    waterrower.startRecording(
      `workout-${distance}-${moment().format("YYYY-MM-DD-HH-mm-ss")}`
    );
    waterrower.displaySetDistance(Units.Meters);
    waterrower.defineDurationWorkout(minutes * 60);
    waterrower.defineDistanceWorkout(distance, Units.Meters);
  };

  return (
    <>
      {status !== "not-connected" && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setWorkout(waterrower, 5000, 25)}
          >
            set 5K workout
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setWorkout(waterrower, 3000, 15)}
          >
            set 3K workout
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setWorkout(waterrower, 2000, 10)}
          >
            set 2K workout
          </Button>
        </>
      )}
    </>
  );
};
