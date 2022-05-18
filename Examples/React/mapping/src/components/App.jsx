import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contacts)
{
    return <Card
      key={contacts.id}
      id={contacts.id} 
      name={contacts.name }
      img={contacts.imgURL}
      tel={contacts.phone}
      email={contacts.email}
    ></Card>
}

function App()
{
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

      {/* loops over each item in the contacts array
          must contain a unique key */}
      {contacts.map(createCard)}

    </div>
  );
}

export default App;