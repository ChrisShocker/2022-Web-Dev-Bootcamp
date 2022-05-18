import React from "react";

function Heading() {
  var date = new Date();
  var textColor = "red";
  var greeting = "Good Morning";

  if (date.getHours() >= 0 && date.getHours() <= 12) {
    textColor = "green";
    greeting = "Good Afternoon";
  } else if (date.getHours() > 12 && date.getHours() <= 18) {
    textColor = "green";
    greeting = "Good Afternoon";
  } else {
    textColor = "blue";
    greeting = "Good Evening";
  }

  return (
    <h1 className="heading" style={{ color: textColor }}>
      {greeting}
    </h1>
  );
}

export default Heading