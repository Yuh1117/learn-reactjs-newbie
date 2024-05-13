import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

class Mycomponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'huy', age: 19 },
            { id: 2, name: 'gia', age: 20 },
            { id: 3, name: 'van', age: 18 }
        ]
    }
    render() {
        return (
            <div>
                <UserInfo />
                <DisplayInfo listUsers = {this.state.listUsers} />
            </div>
        );
    }
}

export default Mycomponent;