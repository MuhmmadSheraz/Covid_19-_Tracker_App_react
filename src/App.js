import React, { useEffect, useState } from "react";
// import { globalCases } from "./config";

import Header from "./view/Header";
import Counter from "./view/Counter";
import Chart from "./view/Chart";
import CustomSearch from "./view/CutomSearch";
function App() {
  
  return (
    <div className="App">
      <Header />
      <CustomSearch />
      <Counter />
      <Chart />
    </div>
  );
}

export default App;
