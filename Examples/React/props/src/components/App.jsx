import React from "react";
import Cards from "./Card";
import contacts from '../contacts';

function App()
{
    return (
        <div>
            <Cards name={contacts[0].name}
                img={contacts[0].imgURL}
                phone={contacts[0].phone}
                email={contacts[0].email}>
            </Cards>
            <Cards name={contacts[1].name}
                img={contacts[1].imgURL}
                phone={contacts[1].phone}
                email={contacts[1].email}>
            </Cards>
            <Cards name={contacts[2].name}
                img={contacts[2].imgURL}
                phone={contacts[2].phone}
                email={contacts[2].email}>
            </Cards>
        </div>
    );
};

export default App;