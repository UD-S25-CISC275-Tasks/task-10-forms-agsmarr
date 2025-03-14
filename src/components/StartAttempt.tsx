import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    //WORKING
    //state
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    //start button
    function start(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    //mulligan button
    function mulligan(): void {
        setAttempts(1 + attempts);
    }
    return (
        <div>
            Attempts: {attempts}
            <Button
                onClick={() => {
                    start();
                }}
                disabled={progress || attempts == 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => {
                    setProgress(false);
                }}
                disabled={!progress}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => {
                    mulligan();
                }}
                disabled={progress}
            >
                Mulligan
            </Button>
        </div>
    );
}
