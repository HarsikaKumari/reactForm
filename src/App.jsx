import React, { useState } from 'react'

const App = () => {
    const [headingText, setHeadingText] = useState("");
    const [isMouseOver, setMouseOver] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    function handleClick(event) {
        setHeadingText(firstName+" "+lastName);

        event.preventDefault();
      }
    
      function handleMouseOver() {
        setMouseOver(true);
      }
    
      function handleMouseOut() {
        setMouseOver(false);
      }

      function handleChangeFirst(event) {
        setFirstName(event.target.value);
      }

      function handleChangeLast(event) {
        setLastName(event.target.value);
      }

    return (
        <div className="container">

            <h1>Hello {headingText} </h1>

            <form onSubmit={handleClick}> 
            <input
                type="text"
                placeholder="First name"
                onChange={handleChangeFirst}
                 />
            
            <input
                type="text"
                placeholder="Last name"
                onChange={handleChangeLast}
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