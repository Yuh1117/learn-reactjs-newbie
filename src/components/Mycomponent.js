import React from "react";

class Mycomponent extends React.Component{
    state = {
        name : 'huy',
        age : 19
    }

    handleClick = async () => {
        await this.setState({
            name : `gia huy`
        })
        console.log(`My name is ${this.state.name}`)
        
    }   
    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} <br></br>
                I am {this.state.age}<br></br>
                <button onClick={(this.handleClick)}>Click me</button>
            </div>
            
        );
    }
}

export default Mycomponent;