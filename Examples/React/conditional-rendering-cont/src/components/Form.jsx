import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props)
{
    return (
        <form className="form">
            <Input
                type="text"
                placeholder="Username"></Input>
            <Input
                type="password"
                placeholder="Password"></Input>
            {props.userIsRegistered && 
            <Button
                type="submit"
                buttonName="Login"></Button>}

            {!props.userIsRegistered && 
             <Input
                type="password"
                placeholder="Confirm Password"></Input>}

            {!props.userIsRegistered && 
            <Button
                type="submit"
                buttonName="Register"></Button>}
                
        </form>
    );
}

export default Form;