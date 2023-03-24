import { useNavigate } from "react-router-dom"
function Home() {
    const navigate = useNavigate();
    return (<div>
        <p> This is home page</p>
        <button onClick={() => navigate("/users")}>Next Page</button>
    </div>);
}

export default Home;