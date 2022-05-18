import React, { useState } from "react";

function App()
{
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        emailAddress: ""
    });

    function updateInfo(event)
    {
        const { name, value } = event.target;

        setContact(prevValue =>
        {
            if (name === "fName")
            {
                return {
                    firstName: value,
                    lastName: prevValue.lastName,
                    emailAddress: prevValue.emailAddress
                }
            }
            else if (name === "lName")
            {
                return {
                    firstName: prevValue.firstName,
                    lastName: value,
                    emailAddress: prevValue.emailAddress
                }
            }
            else if (name === "email")
            {
                return {
                    firstName: prevValue.firstName,
                    lastName: prevValue.lastName,
                    emailAddress: value
                }
            }
        })
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.firstName} {contact.lastName}
            </h1>
            <p>{contact.emailAddress}</p>
            <form>
                <input onChange={updateInfo} name="fName" 
                placeholder="First Name" value={contact.firstName} />
                <input onChange={updateInfo} name="lName" 
                placeholder="Last Name" value={contact.lastName} />
                <input onChange={updateInfo} name="email" 
                placeholder="Email" value={contact.emailAddress} />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;