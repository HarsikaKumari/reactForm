import React, { useState } from 'react'

const App = () => {
  const [headingText, setHeadingText] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [isMouseOver, setMouseOver] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function handleClick(event) {
    event.preventDefault();

    setHeadingText(contact.firstName + " " + contact.lastName);
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
      if (name === "fName") {
        return {
          firstName: value,
          lastName: prev.lastName,
          email: prev.email
        };
      } else if (name === "lName") {
        return {
          firstName: prev.firstName,
          lastName: value,
          email: prev.email
        };
      } else if (name === "email") {
        return {
          firstName: prev.firstName,
          lastName: prev.lastName,
          email: value
        };
      }
    });
  }


  return (
    <div className="container">

      <h1>Hello {headingText} </h1>
      <p> {subHeading}</p>

      <form onSubmit={handleClick}>
        <input
          type="text" name="fName"
          placeholder="First name"
          onChange={handleChange}
          value={contact.firstName}
        />

        <input
          type="text" name="lName"
          placeholder="Last name"
          onChange={handleChange}
          value={contact.lastName}
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