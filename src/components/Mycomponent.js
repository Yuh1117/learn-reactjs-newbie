import React from "react";

class Mycomponent extends React.Component{
    state = {
        name : 'huy',
        age : 19
    }


    //JSX
    render(){
        return(
            <div>
                My name is {this.state.name} <br></br>
                I am {this.state.age}
            </div>
            
        );
    }
}

export default Mycomponent;