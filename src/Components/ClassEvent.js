import { Component } from "react";

class ClassEvent extends Component{
    handleClick(){
        console.log("class based event handling")
    }
    render(){
        return(
            <div>
                Garb and classmates 👨‍👩‍👧‍👦
                <button onClick={this.handleClick}>my-classmate</button>
            </div>
        )
    }
}

export default ClassEvent;