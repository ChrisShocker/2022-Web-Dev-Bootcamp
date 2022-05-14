import React from 'react';
import ReactDOM from 'react-dom/client';

function Card(props)
{
  console.log(props);
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
    <Card name="Beyonce" 
    img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    imgAlt="picture of Beyonce"
    phone="123 456 7890" 
    email="b@email.com">
    </Card>
  </div>
);

