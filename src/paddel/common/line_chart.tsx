import React from "react";
import Chartjs from "chart.js";
type LineChartProps = {
  title: string;
  data: Array<{ label: string; value: number }>;
  color: string;
  lastN?: number;
};

export const LineChart = (props: LineChartProps) => {
  const { data, lastN } = props;
  const chartContainer = React.useRef(null);
  const [chartInstance, setChartInstance] = React.useState(null);

  React.useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const config = {
        type: "line",
        data: {
          labels: data.map((d) => d.label),
          datasets: [
            {
              label: props.title,
              data: data.map((d) => d.value),
              backgroundColor: props.color,
            },
          ],
        },
      };
      const newChartInstance = new Chartjs(chartContainer.current, config);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  React.useEffect(() => {
    if (chartInstance) {
      const lastNData = lastN ? data.slice(-lastN) : data;
      chartInstance.data.labels = lastNData.map((d) => d.label);
      chartInstance.data.datasets[0].data = lastNData.map((d) => d.value);
      chartInstance.update();
    }
  }, [data]);

  return <canvas ref={chartContainer} />;
};
