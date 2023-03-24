import React from "react"
class Person extends React.Component {
    /*
    Lifecycle
    Mounting
    updating
    unMounting
    */

    constructor(props) {
        super(props);
        console.log("constructor called")
        this.state = {
            count: 0,
            name: "",
            users: ["mahesh", "1", "2", "3"],
            isShow: true
        }
    }

    componentWillMount() {
        console.log("component will mount");
    }

    componentDidMount() {
        console.log("component did mount");
    }


    increment = () => {
        console.log("increment called");
        console.log("before increment", this.state.count);
        this.state.count = this.state.count + 1;
        this.setState({ count: this.state.count, isShow: !this.state.isShow })
        console.log("after increment", this.state.count);


    }

    render() {
        console.log("render called");
        return <div>
            <h1>count value is {this.state.count}</h1>
            <button onClick={this.increment} value="increment">Increment</button>
            {this.state.users.map((value, key) => <h1 key={key}>{value}</h1>)}
            {/* {this.state.isShow && <Child></Child>} */}
            {this.state.isShow == true ? <Child></Child> : <hi>no child</hi>}

        </div>

    }



}

export default Person;

class Child extends React.Component {

    constructor(props) {
        super(props);
    }


    componentWillUnmount() {
        console.log("component did unmount ***********");
    }

    render() {
        return <div>
            This is child component
        </div>
    }


}

/* 
class based component : statefull
functional based component: stateless
*/

//+