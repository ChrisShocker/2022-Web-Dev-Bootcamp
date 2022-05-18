//4. Import the contacts.js file to create card components.

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//props short for properties are passed as an onbject and used to change values
function Card(props)
{
  return <div>
    <h2>{props.name}</h2>
    <img src={props.img}
      alt={props.imgAlt}
    />
    <p>{props.phone}</p>
    <p>{props.email}</p>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* Passing in props example */}
    <Card name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      imgAlt="picture of Beyonce"
      phone="123 456 7890"
      email="b@email.com">
    </Card>
    {/* End of passing in props example */}

    {/* Example with external props saved in contacts.js */}
    <App></App>
  </div>
);

