import React, { useState } from 'react'

const App = () => {
  const [headingText, setHeadingText] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleClick(event) {
    event.preventDefault();

    setHeadingText(contact.fName + " " + contact.lName);
    setSubHeading(contact.email);
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prev => { 
      return {
        ...prev,
        [name]: value
      }
    });
  }


  return (
    <div className="container">

      <h1>Hello {headingText} </h1>
      <p>{subHeading}</p>

      <form onSubmit={handleClick}>
        <input
          type="text" name="fName"
          placeholder="First name"
          onChange={handleChange}
          value={contact.fName}
        />

        <input
          type="text" name="lName"
          placeholder="Last name"
          onChange={handleChange}
          value={contact.lName}
        />

        <input
          type="email" name="email"
          placeholder="Email"
          onChange={handleChange}
          value={contact.email}
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