import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./chart.css";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

const initialState = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "red",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "red",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [5, 10, 15, 20, 125, 30, 35],
    },
  ],
};
const data = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
let Chart = () => {
  return (
    <div m={3} className="chartWrapper">
      <div className="chartInside">
        <div className="pie">
          <Pie
            data={data}
            width={400}
            height={400}
            options={{ maintainAspectRatio: false }}
          />
        </div>
        <div className="line">
          <Line
            data={initialState}
            width={800}
            height={500}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
};
export default Chart;

// data: [10, 20, 30, 40, 50, 60, 70]
// data: [5, 10, 15, 20, 25, 30, 35]
{
  /* <div m={3} className="chartWrapper">
<div className="chartInside">
  <Grid container>
    <Grid item md={4}>
      <div className="center">
        <Pie data={data} />
      </div>
    </Grid>
    <Grid item >
      <Line data={initialState} />
    </Grid>
  </Grid>
</div>
</div> */
}
