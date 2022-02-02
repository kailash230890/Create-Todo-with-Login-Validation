import React, { useState } from "react";
import Todo from "../todo/Todo";
import "./Login.css";

function Login() {
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
            username: "user",
            password: "1111"
        },
        {
            username: "user2",
            password: "2222"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {

        event.preventDefault(); //Prevent page reload

        var { uname, pass } = document.forms[0];

        const userData = database.find((user) => user.username === uname.value); // Find user login info
        
        if (userData) { // Compare user info
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass }); // Invalid password
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname }); // Username not found
        }
    };
    
    const renderErrorMessage = (name) => // Generate JSX code for error message
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = ( // JSX code for login form
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div className="app">
            {isSubmitted ? <Todo /> : renderForm}
        </div>
    );
}
export default Login;