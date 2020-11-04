import React from 'react';

const carImages = ["https://cdn.glitch.com/db7f039e-665f-4657-89b1-f6e2662d1aae%2Fcar1.svg?1555625115613", "https://cdn.glitch.com/db7f039e-665f-4657-89b1-f6e2662d1aae%2Fcar2.svg?1555627925803",
                 "https://cdn.glitch.com/db7f039e-665f-4657-89b1-f6e2662d1aae%2Fcar3.svg?1555627925777", "https://cdn.glitch.com/db7f039e-665f-4657-89b1-f6e2662d1aae%2Fcar4.svg?1555627925766",
                 "https://cdn.glitch.com/db7f039e-665f-4657-89b1-f6e2662d1aae%2Fpolice.svg?1555628102252", "https://cdn.glitch.com/db7f039e-665f-4657-89b1-f6e2662d1aae%2Fcar5.svg?1555629517030"];

function CarList(props) {
  const cars = props.cars;
  const carItems = cars.map( (carItem) =>
    <img className="car" key={carItem.id} style={{top: carItem.id*160 + 30, left: carItem.left}} src={carImages[Math.floor(Math.random()*6)]} />
  );
  function moveCars() {
    for(let keyName in cars) {
      cars[keyName].left += 20;
    }
  }
  function componentDidMount() {
    setInterval(moveCars, 100);
  }

  return (
    <div>{carItems}</div>
  )
}

const cars = [{id: 1, left: 0}, {id: 2, left: 20}, {id: 3, left: 30}, {id: 4, left: 50}];
export default function() {

  return (
    <div id="cars">
      <CarList cars={cars} />
    </div>
  )
}
