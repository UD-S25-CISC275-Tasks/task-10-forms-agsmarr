import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    //WORKING
    const [selectedAnswer, setSelected] = useState<string>(options[0]);
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group>
                <Form.Select value={selectedAnswer} onChange={updateSelected}>
                    {options.map((op: string) => (
                        <option value={op}>{op}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selectedAnswer == expectedAnswer ?
                <span>✔️</span>
            :   <span>❌</span>}
        </div>
    );
}
