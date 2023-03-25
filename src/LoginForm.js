import loginFormStyle from "./LoginFormCss"
import "./LoginForm.css"
import React,{useState} from "react"
import InputTypeComponent from "./InputTypeComponent"
import { AuthContext } from "./App"
function LoginForm() {
    const {dispatch} = React.useContext(AuthContext)
/*
inline
create style object
take  separate file based on class name access the style 
*/
const intialValue = {username:"",email:"",phone:""}

const [formValue,SetFormValue] = useState(intialValue)
const [formErrors,setFormErrors] = useState({})
// const [userName,setUserName] = useState();
//     const [email, setEmail] = useState();
//     const [phone, setPhone] = useState();

const handeSubmitAction = () => {
 console.log("submit clicked")
 console.log("form value",formValue)

 dispatch({type:"Login",payload:{token:"12345"}})

    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   const error = {} ;
    if (!formValue.username) {
        console.log("please enter username")
        error.username = "User name is required"
    }
    if (!formValue.email) {
        console.log("please enter email")
        error.email = "User email is required"
    } else if(!emailReg.test(formValue.email)){
        error.email = "This is not a valid email format"
    }
    if (!formValue.phone) {
        console.log("please enter phone")
        error.phone = "User phone is required"

    }
    setFormErrors(error);


}


const handleOnChange = (e,data) => {

    const {name,value} = e.target;
    SetFormValue({...formValue,[name]:value})
    console.log("formobject is",formValue,data)



    // console.log(e)
    // console.log("name",name)
    // console.log("value", value)
    // if (name=="username") {
    //     setUserName(value)
    // } else if (name == "email"){
    //     setEmail(value)
    // } else if (name == "phone") {
    //     setPhone(value)
    // }

    // console.log(userName,email,phone)


}
  

    return (
    <div className="Container">
        <h1>Login Form</h1>
            <InputTypeComponent labelText="UserName" name="username" placeholder="Enter username" valueChange={handleOnChange} validationError={formErrors.username} ></InputTypeComponent>
            <InputTypeComponent labelText="Email" name="email" placeholder="Enter Email" valueChange={handleOnChange} validationError={formErrors.email} ></InputTypeComponent>
            <InputTypeComponent labelText="PhoneNumber" name="phone" placeholder="Enter PhoneNumber" valueChange={handleOnChange} validationError={formErrors.phone} ></InputTypeComponent>
            <input type="button" value="submit" onClick={handeSubmitAction} ></input>
            {/* <input type="button">Submit</input> */}
    </div>)

}
export default LoginForm;
