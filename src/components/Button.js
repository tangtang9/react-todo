import React from "react";

const Button = props => {
    if (props.isEditing) {
        return (
            <button className="save" onClick={props.toggleIsEditingAt}>
               <p></p>
            </button>
        );
    }
    return (
        <button className="action" onClick={props.handleRemove}>
           <p></p> 
        </button>
    );
};

export default Button;
