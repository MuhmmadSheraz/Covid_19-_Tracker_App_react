import React from "react";
import "./counter.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import skull from "./assessts/skull.png";
import bed from "./assessts/bed.png";
import recovered from "./assessts/recovered.png";
import Container from "@material-ui/core/Container";

let Counter = () => {
  return (
    <div className="counterWrpper">
      <Box py={3} className="conterData">
        <Container maxWidth="md">
          <Grid container>
            <Grid item xs={12} sm={4}>
              <div className="counter_col">
                <img src={skull} />
                <h2>Deaths 200k</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="counter_col">
                <img src={recovered} />
                <h2>Affected 200k</h2>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="counter_col">
                <img className="big_font" src={bed} />
                <h2>Recovered 200k</h2>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default Counter;
