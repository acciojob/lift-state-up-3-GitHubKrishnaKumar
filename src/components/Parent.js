import React, { useState } from 'react'
import Child from './Child';

const Parent=()=>{
    const [selectedOption,setSelectedOption]=useState("");
    return <div className='parent'>
        <h1>Parent Component</h1>
        <Child selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
    </div>
}

export default Parent