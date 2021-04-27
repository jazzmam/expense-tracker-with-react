import React from "react";
import Button from '@material-ui/core/Button';

function AddButton(props: any) {
    return (
        <Button id="addExpenseButton" className="btn" onClick={props.onClick} variant="contained" color="primary">
        {props.content}
    </Button>
        );
    }

export default AddButton;