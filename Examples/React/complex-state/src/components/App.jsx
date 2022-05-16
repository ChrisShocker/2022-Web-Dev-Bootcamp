import React, { useState } from "react";

//OBJ: get user first and last name and add them after the <h1> Hello...

/************************ Method 1: Long **************************/
/*
function App() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

function updateFirstName(event){
    event.preventDefault();
    setFirstName(event.target.value);
}

function updateLastName(event){
    event.preventDefault();
    setLastName(event.target.value);
}

  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form>
        <input onChange={updateFirstName} name="fName" placeholder="First Name" value={firstName} />
        <input onChange={updateLastName} name="lName" placeholder="Last Name" value={lastName} />
        <button>Submit</button>
      </form>
    </div>
  );
}
*/

/************************ Method 2: Short **************************/
function App()
{

    // store both the first and last name into an object
    const [fullName, setFullName] = useState({
        firstName: "",
        lastName: ""
    });

    function updateFullName(event)
    {
        console.log(event.target);
        //destructure event.target and get value for event.target.value 
        //and name for event.target.name
        const{value, name} = event.target;

        setFullName(prevValue =>
        {
            if (name === "fName")
            {
                return {
                    firstName: value,
                    lastName: prevValue.lastName
                }
            }
            else if (name === "lName")
            {
                return {
                    firstName: prevValue.firstName,
                    lastName: value
                }
            }
        });
    }

    return (
        <div className="container">
            <h1>Hello {fullName.firstName} {fullName.lastName}</h1>
            <form>
                <input onChange={updateFullName}
                    name="fName"
                    placeholder="First Name"
                    value={fullName.firstName} />
                <input onChange={updateFullName}
                    name="lName"
                    placeholder="Last Name"
                    value={fullName.lastName} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;