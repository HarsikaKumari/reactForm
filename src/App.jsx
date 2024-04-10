import React, { useState } from 'react'

const App = () => {
    const [headingText, setHeadingText] = useState("");
    const [isMouseOver, setMouseOver] = useState(false);
    const [name, setName] = useState("");

    function handleClick( event) {
        setHeadingText(name);

        event.preventDefault();
      }
    
      function handleMouseOver() {
        setMouseOver(true);
      }
    
      function handleMouseOut() {
        setMouseOver(false);
      }

      function handleChange(event) {
        setName(event.target.value);
      }

    return (
        <div className="container">

            <h1>Hello {headingText} </h1>

            <form onSubmit={handleClick}> 
            <input
                type="text"
                placeholder="What's your name?"
                onChange={handleChange}
                 />
                 

            <button className='btn'
            type="submit"
                style={{ backgroundColor: isMouseOver ? "black" : "white" }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >Submit</button>
            </form>

        </div>
    )
}

export default App;