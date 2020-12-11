import { Button } from "@material-ui/core";
import moment from "moment";
import React from "react";
import { WaterRowerContext } from "../../component";
import { WaterRower, Units } from "../lib";

type ChooseProps = {};
export const Choose = (props: ChooseProps) => {
  const { waterrower, status } = React.useContext(WaterRowerContext);
  const setWorkout = (waterrower: WaterRower, distance: number) => {
    waterrower.startRecording(
      `workout-${distance}-${moment().format("YYYY-MM-DD-HH-mm-ss")}`
    );
    waterrower.defineDistanceWorkout(distance, Units.Meters);
  };

  return (
    <>
      {status !== "not-connected" && (
        <>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setWorkout(waterrower, 5000)}
          >
            set 5K workout
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setWorkout(waterrower, 3000)}
          >
            set 3K workout
          </Button>
        </>
      )}
    </>
  );
};
