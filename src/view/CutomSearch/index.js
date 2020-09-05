import React, { useState } from "react";
import "./search.css";
const CustomSearch = () => {
    const [userInput, setUserInput] = useState(""); 
    // const [customData,setCustomData]=useState(false)
  const setData = (e) => {
    setUserInput(e.target.value);
  };

  const submit=()=>{
      console.log(userInput.toLowerCase())
  }
  return (
    <div className="search">
      <p className="heading">Search Country</p>
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
