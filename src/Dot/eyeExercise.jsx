import { useState } from 'react';
import './../App.css';
import SessionCount from './sessionCount.jsx';

// This EyeExercise React component displays an interactive eye exercise animation
//Used useState to manage various states including animation speed, size, direction, and whether the animation is running.
// The animation can move in a clockwise or anticlockwise circle, or horizontally or vertically
// The user can adjust the speed and size of the animation and pause or resume the exercise.
// The number of completed sessions is tracked using the SessionCount component

function EyeExercise() {
    const [speed, setSpeed] = useState(5);
    const [size, setSize] = useState(50);
    const [direction, setDirection] = useState('clockwise');
    const [animationRunning, setAnimationRunning] = useState(false);

    // This function calculates animation duration based on speed
    const getAnimationDuration = () => {
        return speed === 0 ? 0 : speed === 1 ? 10 : 10 / speed;
    };

    // Function for handling speed change
    const handleSpeedChange = (e) => {
        setSpeed(Number(e.target.value));
    };

    // Function for handling size change
    const handleSizeChange = (e) => {
        setSize(Number(e.target.value));
    };

    // Function for handling direction change
    const handleDirectionChange = (e) => {
        setDirection(e.target.value);
    };

    // Function for toggle animation state
    const toggleAnimation = () => {
        setAnimationRunning(!animationRunning);
    };

    const animationName = direction === 'clockwise' || direction === 'anticlockwise' ? 'circle' :
                          direction === 'horizontal' ? 'horizontalAnimation' : 'up-down-center';

    
    const animationDirection = direction === 'clockwise' ? 'normal' : 'reverse';

    return (
        <div className="App">
            <h1>Eye Exercise</h1>
            <div className="controls">
                <button onClick={toggleAnimation}>
                    {animationRunning ? 'Pause Exercise' : 'Start Exercise'}
                </button>
                <label>
                    Speed
                    <input type="number" value={speed} onChange={handleSpeedChange} />
                </label>
                <label>
                    Size
                    <input type="number" value={size} onChange={handleSizeChange} />
                </label>
                <label>
                    Direction
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
                    className="circle"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        animationName: animationName,
                        animationDuration: `${getAnimationDuration()}s`,
                        animationTimingFunction: 'linear',
                        animationIterationCount: 'infinite',
                        animationDirection: animationDirection,
                        animationPlayState: animationRunning ? 'running' : 'paused'
                    }}
                ></div>
            </div>
            <SessionCount />
        </div>
    );
}

export default EyeExercise;
