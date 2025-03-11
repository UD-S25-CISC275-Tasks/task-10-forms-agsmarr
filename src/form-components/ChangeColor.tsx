import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    //WORKING
    const [color, setColor] = useState<string>("");
    let colors = [
        "purple",
        "blue",
        "red",
        "green",
        "orange",
        "magenta",
        "cyan",
        "white",
    ];
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((newCol: string) => (
                <span key={newCol} style={{ backgroundColor: newCol }}>
                    <Form.Check
                        inline
                        type="radio"
                        value={newCol}
                        label={newCol}
                        onChange={updateColor}
                        checked={color == newCol}
                    ></Form.Check>
                </span>
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: color }}>
                You have chosen {color}.
            </div>
        </div>
    );
}
