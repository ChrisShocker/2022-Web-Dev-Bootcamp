import React, { useState } from "react";

function App()
{
    /************ Basic Spread Examples ***************/
    //how to add the citrus array to the end of fruits array?
    //use es6 spread ..."arrayName"
    const citrus = ["Lime", "Lemon", "Orange"];
    const fruits = ["Apple", "Banana", "Coconut", ...citrus];
    console.log(fruits);

    //Can also insert objects into other objects
    //using spread, puts all objects into the host object under the same object
    const fullName = {
        fName: "Jake",
        lName: "Rhodes"
    }

    const users = {
        ...fullName,
        id: 1,
        userName: "JakeRhodes"
    }
    console.log(users);
    /************ End of Basic Spread Examples ***************/



    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: ""
    });

    /************Reduce with Spread ***************/
    //   function handleChange(event) {
    //     const { name, value } = event.target;
    //
    //     setContact(prevValue => {
    //       if (name === "fName") {
    //         return {
    //           fName: value,
    //           lName: prevValue.lName,
    //           email: prevValue.email
    //         };
    //       } else if (name === "lName") {
    //         return {
    //           fName: prevValue.fName,
    //           lName: value,
    //           email: prevValue.email
    //         };
    //       } else if (name === "email") {
    //         return {
    //           fName: prevValue.fName,
    //           lName: prevValue.lName,
    //           email: value
    //         };
    //       }
    //     });
    //   }

    /************ To ***************/
    function handleChange(event)
    {
        //destructure event.target
        const { name, value } = event.target;

        setContact(prevValue =>
        {
            return {
                //get all the properties from prevValue so now we can use them
                //without specifying each one we need seperatly
                ...prevValue,
                // add the value we want inside array sytax i.e., [name]
                [name]: value
            }
        });
    }

    return (
        <div className="container">
            <h1>
                Hello {contact.fName} {contact.lName}
            </h1>
            <p>{contact.email}</p>
            <form>
                <input
                    onChange={handleChange}
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    name="lName"
                    value={contact.lName}
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    name="email"
                    value={contact.email}
                    placeholder="Email"
                />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default App;