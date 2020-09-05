import React, { useState, useEffect } from "react";
import "./chart.css";
import { Pie } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { globalChart } from "../../config/utils";
// import {getAPI} from '../../config/utils'

let Chart = (props) => {
  const [apiData, setApiData] = useState([]);
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    if (props.country === "" || props.country === "global") {
      const showData = async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/all");
        const data = await response.json();

        setApiData(data);
      };
      showData();
    } else {
      const getCountrty = async () => {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/countries/${props.country.toLowerCase()}`
        );
        const countryData = await response.json();

        setApiData(countryData);
      };
      getCountrty();
    }
  }, [apiData]);
  useEffect(() => {
    let callApi = async () => {
      const getGlobalData = await globalChart();

      setChartData(getGlobalData);
    };

    callApi();
  }, [chartData]);
  const initialState = {
    labels: chartData.map(({ report }) => report),
    datasets: [
      {
        label: "Infected",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#FFC107",
        borderColor: "#FFC107",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#FFC107",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "FFC107",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: chartData.map(({ confirmed }) => confirmed),
      },
      {
        label: "Death",
        fill: false,
        lineTension: 0.2,
        backgroundColor: "#DC3545",
        borderColor: "#DC3545",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "red",
        pointBackgroundColor: "#DC3545",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        // data: [12,55,4444],
        data: chartData.map(({ deaths }) => deaths),
      },
    ],
  };
  const data = {
    labels: [" Deaths", "Recovered", "Infected"],
    datasets: [
      {
        data: [apiData.deaths,apiData.recovered,apiData.active],
        
        // data:[12,67,98],
        backgroundColor: ["#DC3545", "#28A745", "#FFC107"],
        hoverBackgroundColor: ["#DC3545", "#28A745", "#FFC107"],
      },
    ],
  };
  return Object.keys(apiData).length === 0 ? (
    ""
  ) : (
    // console.log(chartData)
    // console.log([parseFloat(apiData.total_cases.replace(/,/g, ''))])
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
            width={1000}
            height={500}
            options={{ maintainAspectRatio: false }}
          />
        </div>
      </div>
    </div>
  );
};
export default Chart;
