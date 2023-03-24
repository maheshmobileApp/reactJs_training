
function InputTypeComponent(props) {
    return (<div className="formField">
        <label>{props.labelText}</label>
        <input
            type="text"
            name={props.name}
            placeholder= {props.placeholder}
            onChange={props.valueChange}
        >
        </input>
        <p>{ props.validationError}</p>
    </div>);

}
export default InputTypeComponent