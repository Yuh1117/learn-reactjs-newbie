import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component{
    render(){
        return(
            <div>
               <UserInfo/>
               <DisplayInfo name = "huy" age = {19}/>
            </div>
        );
    }
}

export default Mycomponent;