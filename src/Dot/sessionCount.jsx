import {react, useState, useEffect} from 'react';
import './../App.css';
import Button from 'react-bootstrap/Button';

// This component tracks the number of completed sessions using localStorage
// It provides buttons to increment the session count and reset it

function SessionCount() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const count = localStorage.getItem('sessionCount');
        if (count) {
            setCount(Number(count));
        }
    }, []);
    const resetCount = () => {
        localStorage.setItem('sessionCount', 0);
        setCount(0);
    };
    const incrementCount = () => {
        const newCount = count + 1;
        localStorage.setItem('sessionCount', newCount);
        setCount(newCount);
    };
    return (
        <div className="session">

            <div className="session-count">
                <button variant="Complete Session" onClick={() => incrementCount()}>Complete Session</button>
                <button variant="Reset" onClick={() => resetCount()}>Reset</button>
            </div>
            <p>You have completed {count} sessions.</p>

        </div>
    );
}

export default SessionCount;