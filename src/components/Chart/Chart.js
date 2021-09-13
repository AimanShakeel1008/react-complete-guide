import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {

    const dataPointsValues=props.dataPoints.map(dataPoint=>dataPoint.value);
    const maxValue=Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
