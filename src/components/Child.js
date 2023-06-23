import React from "react";

const Child=({setSelectedOption,selectedOption})=>{
    return <div className="child">
        <div className="child1">
            <h2>Child Component 1</h2>
            <button onClick={()=>setSelectedOption("Option 1")} id="option1">Option 1</button>
        </div>
        <div className="child2">
            <h2>Child Component 2</h2>
            <button onClick={()=>setSelectedOption("Option 2")} id="option2">Option 2</button>
        </div>
        <p>Selected Option: {selectedOption}</p>
    </div>
}

export default Child