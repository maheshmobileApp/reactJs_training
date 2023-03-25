import { useNavigate } from "react-router-dom"
import { AuthContext } from "./App"
import React from "react";
function Home() {
    const {dispatch} = React.useContext(AuthContext)

    const navigate = useNavigate();
    const logoutAction = () => {
        dispatch({type:"Logout"})
    }
    return (<div>
        <p> This is home page</p>
        <button onClick={() => navigate("/users")}>Next Page</button>

        <button  onClick={logoutAction} >Log out </button>
    </div>);
}

export default Home;