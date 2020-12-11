import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import {
  Distance,
  MeterPerSecond,
  Calories,
  StrokeRate,
} from "../common/types";
import { useStyles } from "./stats_styles";

type StatsProps = {
  distanceData: Array<Distance>;
  msData: Array<MeterPerSecond>;
  totalCal: Array<Calories>;
  strokeRate: Array<StrokeRate>;
};
// displays some statistics
export const Stats = (props: StatsProps) => {
  const { distanceData, msData, totalCal, strokeRate } = props;
  const classes = useStyles();
  return (
    <Grid container spacing={4} justify="center">
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              distance
            </Typography>
            <Typography>{distanceData[distanceData.length - 1]}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              ms
            </Typography>
            <Typography>{msData[msData.length - 1]}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              strokerate
            </Typography>
            <Typography>{strokeRate[strokeRate.length - 1]}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              total calories
            </Typography>
            <Typography>{totalCal[totalCal.length - 1]}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};
