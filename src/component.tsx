import { ThemeProvider } from "@material-ui/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Settings, Status } from "./paddel/common/types";
import { WaterRower } from "./paddel/lib";
import { Main } from "./paddel/main";
import theme from "./theme";

const defaultSettings: Settings = {
  debug: false,
};

let waterrower = new WaterRower({
  datapoints: [
    "m_s_average",
    "total_kcal",
    "tank_volume",
    "stroke_rate",
    "distance",
    "workout_time",
  ],
  refreshRate: 200,
  dataDirectory: "data",
});

export const WaterRowerContext = React.createContext<{
  waterrower: WaterRower;
  status: Status;
  setStatus: (status: Status) => void;
}>({
  status: "not-connected",
  waterrower: waterrower,
  setStatus: (_w) => null,
});
export const SettingsContext = React.createContext(defaultSettings);

function App() {
  const [status, setStatus] = React.useState<Status>("not-connected");

  return (
    <ThemeProvider theme={theme}>
      <SettingsContext.Provider value={defaultSettings}>
        {/* per default, do not initialize waterrower */}
        <WaterRowerContext.Provider
          value={{
            status: defaultSettings.debug ? "connected" : status,
            waterrower: waterrower,
            setStatus: (status: Status) => setStatus(status),
          }}
        >
          <Main />
        </WaterRowerContext.Provider>
      </SettingsContext.Provider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
