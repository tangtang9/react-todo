import React from "react";

const InputForm = props => {
    return (
        <form onSubmit={props.newItemSubmitHandler} className="todoInput">
            <div className="form-card">
                <input
                    className="input"
                    type="text"
                    onChange={props.handleItemInput}
                    value={props.pendingItem}
                    placeholder="填写事项"
                />
                <button type="submit" name="submit" value="submit" className="probation">
                    <i></i>
                   <span>+</span>
                </button>
            </div>
        </form>
    );
};

export default InputForm;
