import {react, useEffect, useState}  from 'react';
import './../App.css';
import SessionCount from './sessionCount.jsx';

function EyeExercise() {
    const [speed, setSpeed] = useState(5);
    const [size, setSize] = useState(50);
    const [direction, setDirection] = useState('clockwise');
    const [movement, setMovement] = useState('horizontal');

  // Function to calculate animation duration based on speed
  const getAnimationDuration = () => {
    return speed === 1 ? 10 : 10 / speed;
  }

  // Handle speed change
  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value));
  };

  // Handle size change
  const handleSizeChange = (e) => {
    setSize(Number(e.target.value));
  };

  // Handle direction change
  const handleDirectionChange = (e) => {
    setDirection(e.target.value);
  };

  return (
    <div className="App">
      <h1>Eye Exercise</h1>
      <SessionCount />
      <div className="controls">
        <label>
          Speed:
          <input type="number" value={speed} onChange={handleSpeedChange} />
        </label>
        <label>
          Size:
          <input type="number" value={size} onChange={handleSizeChange} />
        </label>
        <label>
          Direction:
          <select value={direction} onChange={handleDirectionChange}>
            <option value="clockwise">Clockwise</option>
            <option value="anticlockwise">Anticlockwise</option>
            <option value="horizontal">Horizontal</option>
            <option value="vertical">Vertical</option>
          </select>
        </label>
      </div>
      <div className="circle-container">
        <div
          className={`circle ${movement}`}
          style={{
            width: size,
            height: size,
            animation: `${direction === 'clockwise' || direction === 'anticlockwise' ? 'circle' : direction === 'horizontal' ? 'horizontalAnimation' : 'up-down-center'} ${getAnimationDuration()}s linear infinite ${
                direction === 'clockwise' ? 'normal' : 'reverse'
            }`,
          }}
        ></div>
    </div>
    </div>);
}
export default EyeExercise;