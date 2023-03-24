import React, { useEffect, useState } from "react";
import axios from 'axios'
import { createFormObject,requestForPostApiCall } from "./api_service";
function PostList() {
    const [userPosts, setUserPost] = useState();

    useEffect(() => {
        console.log("post list called")
        var payload = {"grant_type":"client_credentials","client_id":"8","client_secret":"TTT70hZazIfFM5jNb5XWnNSAtVxT03kkflvAbNHm"};
        requestForPostApiCall("https://staging.drcloudemr.com:9000/oauth/token",payload,function(response){

            console.log("******************response is **************",response)

        });

        // let formdata = createFormObject(payload);
        // axios({
        //     url:"https://staging.drcloudemr.com:9000/oauth/token",
        //     method:"POST",
        //     data:formdata,//body
        //     headers:{}
        // }).then(function (response){
        //     console.log("success response is ",response)
        //     console.log("access token is",response.data.access_token);
        //     localStorage.setItem("accessToken",response.data.access_token);

        // }).catch(function (error){
        //     console.log("error response is ",error)

        // })
   
        // //https://jsonplaceholder.typicode.com/posts
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        //     .then((result) => {
        //         console.log("posts list", result.data)
        //         setUserPost(result.data)
        //     })
        //     .catch((error) => console.log("eroor ", error))

    }, []);

    return (<div>
        {
            userPosts == null ? <div> no results found</div> : userPosts.map((posts) => {
                return (<div>
                    <h1>
                        {posts.id}
                    </h1>
                    <h2>{posts.body}</h2>
                    <h3>
                        {posts.title}
                    </h3>
                </div>)
            })
        }

    </div>);
}

export default PostList;

/*

GET,POST,PUT,PATCH,DELETE....

Request:

1. Base Url and endpoint 
2. Method :GET,POST,PUT,PATCH,DELETE....
3.Body: (payload)
4.headders

Response:

200,201.....
500: server error
400 : bad request 



1. Base Url and endpoint : https://staging.drcloudemr.com:9000/oauth/token
2. Method :POST
3.Body: (payload) : {"grant_type":"client_credentials","client_id":"8","client_secret":"TTT70hZazIfFM5jNb5XWnNSAtVxT03kkflvAbNHm"}
4.headders


*/