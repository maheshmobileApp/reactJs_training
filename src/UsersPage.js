
import { useNavigate } from "react-router-dom"
function UsersPage() {
    const navigate = useNavigate();
    return (<div>
        <p> This is users page</p>
        <button onClick={() => navigate(-1)}>back</button>
    </div>);
}

export default UsersPage;