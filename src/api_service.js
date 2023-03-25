import axios from 'axios'
export const createFormObject = (payload) => {
    let formdata = new FormData();
    let keys = Object.keys(payload);
    keys.map( function (key) {
        let value = payload[key];
        formdata.append(key,value)
    })
    return formdata;
}

export const requestForPostApiCall = async (url,payload,callBack) => {
    let formdata = createFormObject(payload);
    axios({
        url:url,
        method:"POST",
        data:formdata,//body
        headers:{}
    }).then(function (response){
        // console.log("success response is ",response)
        // console.log("access token is",response.data.access_token);
        localStorage.setItem("accessToken",response.data.access_token);
        callBack(response)
    }).catch(function (error){
        console.log("error response is ",error)
        callBack({"error":error})
    })
}

// Login form -> form validation -> create login payalod and call the api
