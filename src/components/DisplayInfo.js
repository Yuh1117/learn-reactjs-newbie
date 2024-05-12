import React from "react";

class DisplayInfo extends React.Component{
    render(){
        const {name, age} = this.props
        return(
            <div>
                <div>{name}</div>
                <div>{age}</div>
            </div>
        )
    }
}
export default DisplayInfo