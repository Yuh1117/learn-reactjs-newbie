import React from "react";

class DisplayInfo extends React.Component{
    render(){
        const {listUsers} = this.props
        return(
            <div>
                {
                    listUsers.map((user) =>{
                        return(
                            <div key={user.id}>
                                    <div>id: {user.id}</div>
                                    <div>name: {user.name}</div>
                                    <div>age: {user.age}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default DisplayInfo