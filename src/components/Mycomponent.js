import React, { useReducer } from "react";
import UserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class Mycomponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'huy', age: 19 },
            { id: 2, name: 'gia', age: 20 },
            { id: 3, name: 'van', age: 18 }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
                listUsers: [userObj, ...this.state.listUsers],
            }
        )
    }

    render() {
        return (
            <div>
                <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                <DisplayInfo listUsers={this.state.listUsers} />
            </div>
        );
    }
}

export default Mycomponent;