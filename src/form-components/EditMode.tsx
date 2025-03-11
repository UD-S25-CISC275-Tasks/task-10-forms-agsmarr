import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    //WORKING
    const [editing, setEditing] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function changeEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                checked={editing}
                onChange={changeEditing}
            ></Form.Check>
            {editing ?
                <span>
                    <Form.Group>
                        <Form.Label>Name: </Form.Label>
                        <Form.Control onChange={changeName}></Form.Control>
                    </Form.Group>
                    <Form.Check
                        id="student"
                        type="checkbox"
                        checked={isStudent}
                        onChange={() => {
                            setStudent(!isStudent);
                        }}
                        label="Student"
                    ></Form.Check>
                </span>
            :   <span></span>}
            <div>
                {name} is {isStudent ? " a student" : " not a student"}
            </div>
        </div>
    );
}
