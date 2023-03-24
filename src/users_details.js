import { useParams } from "react-router-dom";
import userdata from './userDetails_data'

function UsersDetailsPage() {
    const { userId } = useParams()
    console.log("USER ID IS", userId)
    const userDetails = userdata.find((user) => user.id == userId)
    console.log("USER Details", userDetails)

    return (<div>
        <h1>User Deails</h1>
        <h2>{userDetails.name}</h2>
        <h3>{userDetails.email}</h3>
        <h4>{userDetails.phone}</h4>

    </div>);
}

export default UsersDetailsPage;