import {
  AppBar,
  Button,
  Card,
  List,
  Grid,
  Toolbar,
  CardContent,
  CssBaseline,
  ListItem,
} from "@material-ui/core";
import Container from "@material-ui/core/Container/Container";
import Typography from "@material-ui/core/Typography/Typography";
import React from "react";
import { SettingsContext, WaterRowerContext } from "../component";
import { useStyles } from "./main_styles";
import { Stats } from "./stats";
import { useWatterrower } from "./waterrower/state_hook";

// waterrower.playRecording('simulationdata');
// console.log('Playing \'simulationdata\'');

export interface MainProps {}

export const Main = (props: MainProps) => {
  const { waterrower, status, setStatus } = React.useContext(WaterRowerContext);
  const { debug } = React.useContext(SettingsContext);
  const classes = useStyles();
  const { data, strokeRate, msData, totalCal, distance } = useWatterrower(
    waterrower,
    setStatus,
    debug
  );

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Das Paddel
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container maxWidth="lg" className={classes.cardGrid}>
          {status === "not-connected" && (
            <Typography variant="h6" color="inherit" noWrap>
              Please connect your Waterrower
            </Typography>
          )}
          {status !== "not-connected" && (
            <Stats
              distanceData={distance}
              msData={msData}
              strokeRate={strokeRate}
              totalCal={totalCal}
            />
          )}
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Debug
                </Typography>
                {JSON.stringify(data[data.length - 1])}
                {/* <List>
                  {data.map((d, i) => (
                    <ListItem key={i}>{JSON.stringify(d)}</ListItem>
                  ))}
                </List> */}
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </main>
    </>
  );
};
