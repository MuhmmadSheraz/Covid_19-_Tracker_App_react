import React, { useEffect, useState } from "react";
// import { globalCases } from "./config";

import Header from "./view/Header";
import Counter from "./view/Counter";
import Chart from "./view/Chart";
import CustomSearch from "./view/CutomSearch";
function App() {
  const [country, setCountry] = useState("");
  useEffect(() => {
    console.log(country)
    
  }, [country])
  let getCountry = (param) => {

    setCountry(param)
  };
  return (
    <div className="App">
      <Header />
      <CustomSearch getCountry={getCountry} />
      <Counter country={country}/>
      <Chart country={country}/>
    </div>
  );
}

export default App;
