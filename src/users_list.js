
import { Link } from "react-router-dom";
import userdata from './userDetails_data'
function UsersListView() {
    const token = localStorage.getItem("accessToken");
    return (
        <div>
            <p>{token}</p>
            <p>users list </p>
            {
                userdata.map((user) => {
                    const { name, email, id } = user;
                    return (
                        <Link to={'/userDetails/' + id}>
                            <div key={id} >
                                <p>{name}</p>
                            </div>
                        </Link>
                    )
                })
            }

        </div>);

}

export default UsersListView;
//login -> home

//