import React from "react";
import logo from "./assessts/logo.png";
import skull from "./assessts/skull.png";
import bed from "./assessts/bed.png";
import recovered from "./assessts/recovered.png";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Box from "@material-ui/core/Box";

import "./header.css";

export default function Header() {
  return (
    <div className="headerWrapper">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className="img_sec">
            <img
              className="headerImage"
              src="https://www.slashgear.com/wp-content/uploads/2020/06/man-in-medical-mask-showing-stop-sign-4127465-pexels.jpg"
              alt="headerbackground"
            />
            <div className="logo_sec">
              <img src={logo} alt="logo" />
              CoronaStatus
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className="content_sec">
            <div className="content_inside">
              <Box m={2} className="heading1">
                ACT NOW BEFORE ITS TOO LATE.
              </Box>
              <Box m={2} className="heading2">
                W.H.O GUIDLINES FOR PREVENTATION
              </Box>
              <Box m={3}>
                <ol className="list">
                  <li>
                    Clean your hands often. Use Soap and water,or ab
                    alcohol-based hand rub.
                  </li>
                  <li>
                    Maintain & safe distance from anyone who is coughing or
                    sneezing.
                  </li>
                  <li>Don't touch your eyes,nose,mouth. </li>
                  <li>Stay Home if you feel unwell.</li>
                  <li>
                    Maintain & safe distance from anyone who is coughing or
                    sneezing.
                  </li>
                </ol>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

{
  /* <Box mx={2} my={5}>/ */
}
//   <Grid container>
//   <Grid item xs={12}>
//   <Grid item xs={4}>
//     <div className="icons">
//       <img src={skull} />
//       Deaths 200k
//     </div>
//   </Grid>
//   <Grid item xs={4}>
//     <div className="icons">
//       <img src={bed} />
//       Affected 100k
//     </div>
//   </Grid>
//   <Grid item xs={4}>
//     <div className="icons">
//       <img src={recovered} />
//       Recovered 100k
//     </div>
//   </Grid>
//   </Grid>

// </Grid>
{
  /* </Box> */
}
