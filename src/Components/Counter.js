import { Component } from "react";

class Counter extends Component {
    constructor(){
        super();
        this.state = {
            counter: 24,
        };
    }

    increment=()=>{
        console.log (this)
        this.setState({
            counter: this.state.counter + 10,
        });
    }

    decrease(){
        this.setState({
            counter: this.state.counter - 5,
        });
    }

    render () {
        return(
            <div>
              <h3>count value is: {this.state.counter} </h3>
              <button onClick={ this.increment}>increment</button>
              <button onClick={()=> this.decrease()} >decrement</button>
            </div>
        )
    }

}

export default Counter