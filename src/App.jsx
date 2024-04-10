import React, { useState } from 'react'

const App = () => {
    const [headingText, setHeadingText] = useState("Hello");
    const [isMouseOver, setMouseOver] = useState(false);
    return (
        <div className="container">

            <h1>{headingText}</h1>

            <input type="text" placeholder="What's your name?" />

            <button className='btn' style={{backgroundColor: isMouseOver ? "black" : "white"}} onClick={ () => {
                setHeadingText("Submitted");
            }} onMouseOver={() => {
                setMouseOver(true);
            }} onMouseOut={() => {
                setMouseOver(false);
            }}
            >Submit</button>

        </div>
    )
}

export default App;