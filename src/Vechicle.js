import { name, age } from './Constants'

function Vechicle(props) {
    console.log(name)
    return <h1>car type is {props.name} price {props.price}</h1>
}

export default Vechicle;

//React Hooks
//Arrow function component
/*

const Vechicle = (props) = > {

    return <h1>car type is {props.name} price {props.price}</h1>
}

const Vechicle = (props) = >   <h1>car type is {props.name} price {props.price}</h1>



textfiled
textfiled
button
button button 

*/