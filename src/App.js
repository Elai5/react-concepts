import React from "react";

function coinToss() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

const pics = {
  kitty: "https://content.codecademy.com/courses/React/react_photo-kitty.jpg",
  doggy: "https://content.codecademy.com/courses/React/react_photo-puppy.jpeg",
};
let age = 18;
let drinkingAge = 20;
function App() {
  const myList = (
    <ul>
      <li>finish react</li>
      <li>do cybersec</li>
      <li>the shawn mendez</li>
    </ul>
  );

  let img;
  if (coinToss() === "heads") {
    img = <img src={pics.kitty} alt="Kitty" />;
  } else {
    img = <img src={pics.doggy} alt="Doggy" />;
  }

  const headline = (
    <h1>
      {age >= drinkingAge ? 'Buy drink' : 'do teen stuff'}
    </h1>
  );
  return (
    <div>
      {myList}
      {img}
      {headline}
    </div>
  );
}

export default App;
