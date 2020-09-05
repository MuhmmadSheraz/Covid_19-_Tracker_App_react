import React, { useEffect, useState } from "react";
import "./counter.css";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import skull from "./assessts/skull.png";
import bed from "./assessts/bed.png";
import total from "./assessts/total.png";
import recovered from "./assessts/recovered.png";
import Container from "@material-ui/core/Container";
// import { getAPI } from "../../config/utils";

let Counter = (props) => {
  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    if (props.country === "" || props.country === "global") {
      const showData = async () => {
        const response = await fetch("https://disease.sh/v3/covid-19/all");
        const data = await response.json();

        setGlobalData(data);
      };
      showData();
    } else {
      const getCountrty = async () => {
        const response = await fetch(
          `https://disease.sh/v3/covid-19/countries/${props.country.toLowerCase()}`
        );
        const countryData = await response.json();

        setGlobalData(countryData);
      };
      getCountrty();
    }
  }, [globalData]);

  return globalData.length === 0 ? (
    ""
  ) : (
    // console.log(globalData)
    <div className="counterWrpper">
      <Box py={3} className="conterData">
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={3}>
              <div className="counter_col">
                <img src={skull} alt="skull" />
                <h2>Deaths</h2>
                <h2> {globalData.deaths}</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="counter_col">
                <img src={recovered} alt="recovered" />
                <h2>Infected </h2>
                <h2> {globalData.active}</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="counter_col">
                <img className="big_font" src={bed} alt="bed" />
                <h2>Recovered</h2>
                <h2> {globalData.recovered}</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="counter_col">
                <img className="big_font" src={total} alt="bed" />
                <h2>Total Cases </h2>
                <h2>{globalData.cases}</h2>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Counter;
