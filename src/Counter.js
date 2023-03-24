import React, { useEffect, useState } from "react";

function CounterApp(props) {
    //
    //intilize the value
    // increment the value
    //get the value
    //render the value 

    const [age, setAge] = useState(0);
    const [name, setName] = useState("this is react hooks");


    // useEffect(() => {

    // });

    return <div>
        <p> This is function component</p>
        <p>your age is {age}</p>
        <p> {name}</p>

        <button onClick={() => setAge(age + 1)}>
            change the age
        </button>


    </div>

}

export default CounterApp;

//getter
//setter
/*
titile
color
onclick
fontsize
width
height


*/
