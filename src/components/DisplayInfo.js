import React from "react";

class DisplayInfo extends React.Component {

    state = {
        isShow: true,
    }
    handleShowHide = () => {
        this.setState({
            isShow : !this.state.isShow
        })
    }

    render() {
        const { listUsers } = this.props
        return (
            <div>
                <div>
                    <span onClick={this.handleShowHide}>{this.state.isShow ? "Hide" : "Show"} list users: </span>
                </div>
                {this.state.isShow &&
                    <div>
                        {
                            listUsers.map((user) => {
                                return (
                                    <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                                        <div>id: {user.id}</div>
                                        <div>name: {user.name}</div>
                                        <div>age: {user.age}</div>
                                    </div>
                                )

                            })
                        }
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfo