import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    //WORKING
    const [answer, setAnswer] = useState<string>("");
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="answerBox">
                <Form.Label>Answer: </Form.Label>
                <Form.Control
                    value={answer}
                    onChange={updateAnswer}
                ></Form.Control>
            </Form.Group>
            {answer == expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
            ;
        </div>
    );
}
