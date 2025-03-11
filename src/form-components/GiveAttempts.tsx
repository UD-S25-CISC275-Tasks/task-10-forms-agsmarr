import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    //WORKING
    const [attemptsLeft, setLeftAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");
    function updateRequested(event: React.ChangeEvent<HTMLInputElement>) {
        setRequested(event.target.value);
    }
    function gain() {
        if (requested != "") {
            setLeftAttempts(attemptsLeft + parseInt(requested));
        }
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            Attempts left: {attemptsLeft}
            <Form.Group>
                <Form.Label>Requested Entries: </Form.Label>
                <Form.Control
                    type="number"
                    value={requested}
                    onChange={updateRequested}
                ></Form.Control>
            </Form.Group>
            <Button
                onClick={() => {
                    setLeftAttempts(attemptsLeft - 1);
                }}
                disabled={attemptsLeft == 0}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    gain();
                }}
            >
                Gain
            </Button>
        </div>
    );
}
