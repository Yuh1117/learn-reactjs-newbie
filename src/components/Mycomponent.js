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

    handleDeleteUser = (userId) => {
        let listClone = [...this.state.listUsers]
        listClone = listClone.filter(item => {
            if (item.id !== userId) {
                return item
            }
        })
        this.setState({
            listUsers: listClone
        })
    }

    render() {
        return (
            <>
                <div className="a">
                    <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
                    <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
                </div>
                <div className="b">

                </div>

            </>

        );
    }
}

export default Mycomponent;