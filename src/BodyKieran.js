import { useEffect, useRef, useState } from "react";

function WatchTimer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning]);

    function startTimer() {
        setIsRunning(true);
    }

    function stopTimer() {
        setIsRunning(false);
    }

    function resetTimer() {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setTime(0);
    }

    return (
        <main>
            <h1>{time}</h1>
            <button onClick={startTimer} disabled={isRunning} >Start</button>
            <button onClick={stopTimer} disabled={!isRunning} >Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </main>
    );

}

export default function MainBody() {

    return (
        <div>
            <WatchTimer />
        </div>
    );
}