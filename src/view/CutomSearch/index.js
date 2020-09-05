import React, { useState } from "react";
import "./search.css";
const CustomSearch = (props) => {
  const submit = () => {
    props.getCountry(userInput);
  };
  const [userInput, setUserInput] = useState("");
  // const [customData,setCustomData]=useState(false)
  const setData = (e) => {
    setUserInput(e.target.value);
    
  };

  return (
    <div className="search">
      <h1 className="heading">Search Country</h1>
      <input
        onChange={setData}
        type="text"
        name="userInput"
        placeholder="Search Here"
      />
      <button onClick={submit}>Search</button>
    </div>
  );
};
export default CustomSearch;
