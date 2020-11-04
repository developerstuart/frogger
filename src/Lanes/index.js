import React from 'react';

function LaneList(props) {
  const lanes = props.lanes;
  const laneItems = lanes.map( (laneItem) =>
    <div className="lane" key={laneItem.toString()} style={{top: laneItem*160}}></div>
  );
  return (
    <div>{laneItems}</div>
  )
}

const lanes = [1, 2, 3, 4];
export default function() {

  return (
    <div id="lanes">
      <LaneList lanes={lanes} />
    </div>
  )
}
