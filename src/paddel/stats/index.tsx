import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import {
  Distance,
  MeterPerSecond,
  Calories,
  StrokeRate,
  WorkoutTime,
} from "../common/types";
import { useStyles } from "./stats_styles";
import { Chart } from "chart.js";
import { LineChart } from "../common/line_chart";

type StatsProps = {
  distanceData: Array<Distance>;
  msData: Array<MeterPerSecond>;
  totalCal: Array<Calories>;
  strokeRate: Array<StrokeRate>;
  workoutTime: Array<WorkoutTime>;
};
// displays some statistics
export const Stats = (props: StatsProps) => {
  const { distanceData, msData, totalCal, strokeRate, workoutTime } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={4} justify="center">
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            {"Time"}
            <Typography gutterBottom variant="h5" component="h2">
              {workoutTime[workoutTime.length - 1]}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              distance
            </Typography>
            <Typography variant="h4" component="h2">
              {distanceData[distanceData.length - 1]}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              m/s
            </Typography>
            <Typography variant="h4" component="h2">
              {msData[msData.length - 1]}
            </Typography>
            <LineChart
              title="meters per second"
              color="red"
              data={msData.map((d, i) => {
                return {
                  label: i.toString(),
                  value: d,
                };
              })}
              lastN={30}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              strokerate
            </Typography>
            <Typography variant="h4" component="h2">
              {strokeRate[strokeRate.length - 1]}
            </Typography>
            <LineChart
              title="strokerate"
              color="blue"
              data={strokeRate.map((d, i) => {
                return {
                  label: i.toString(),
                  value: d,
                };
              })}
              lastN={30}
            />
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              total calories
            </Typography>
            <Typography variant="h4" component="h2">
              {totalCal[totalCal.length - 1]}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
