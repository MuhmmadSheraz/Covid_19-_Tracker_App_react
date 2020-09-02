import React from "react";
import "./header.css";

import Container from "@material-ui/core/Container";

const Header = () => {
  return (
    <div className="headerWrapper">
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
      <div className="content_sec">
        <Container maxWidth="sm">
          <h1 className="headings">ACT NOW BEFORE IT'S TOO LATE</h1>
          <h3 className="">W.H.O GUIDLINES FOR PREVENTATION</h3>
          <ol className="list">
            <li>
              Clean your hands often. Use Soap and water,or ab alcohol-based
              hand rub.
            </li>
            <li>
              Maintain & safe distance from anyone who is coughing or sneezing.
            </li>
            <li>Don't touch your eyes,nose,mouth. </li>
            <li>Stay Home if you feel unwell.</li>
          </ol>
        </Container>
      </div>
    </div>
  );
};
export default Header;
