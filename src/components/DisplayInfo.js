import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";

// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log("constructor")
//         super(props)
//         this.state = {
//             isShow: true,
//         }

//     }

//     componentDidMount = () => {
//         console.log("did mount")
//         document.title = "huy"
//     }

//     componentDidUpdate = (prevProps, prevState, snapshot) => {
//         console.log("did update", this.props, prevProps)
//         if (this.props.listUsers !== prevProps.listUsers) {
//             if (this.props.listUsers.length === 5) {
//                 alert("5 users")
//             }
//         }

//     }

//     handleShowHide = () => {
//         this.setState({
//             isShow: !this.state.isShow
//         })
//     }

//     render() {
//         console.log("render")
//         const { listUsers } = this.props
//         return (
//             <div className="display-info-container">
//                 <img src={logo} />
//                 <div>
//                     <span onClick={this.handleShowHide}>{this.state.isShow ? "Hide" : "Show"} list users: </span>
//                 </div>
//                 {this.state.isShow &&
//                     <div>
//                         {
//                             listUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={user.age > 18 ? "red" : "green"}>
//                                         <div>id: {user.id}</div>
//                                         <div>name: {user.name}</div>
//                                         <div>age: {user.age}</div>
//                                         <button onClick={() => { this.props.handleDeleteUser(user.id) }}>X</button>
//                                         <hr />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUsers } = props

    const [isShow, setShowHideList] = useState(true)


    const handleShowHideListUsers = () => {
        setShowHideList(!isShow)
    }

    useEffect(() => {
        if (props.listUsers.length === 5) {
            alert("5 users")
        }
        document.title = "huy"
    }, [listUsers])


    return (
        <div className="display-info-container">
            <div>
                <span onClick={() => handleShowHideListUsers()}>{isShow ? "Hide" : "Show"} list users</span>
            </div>
            {isShow &&
                <div>
                    {
                        listUsers.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                                    <div>id: {user.id}</div>
                                    <div>name: {user.name}</div>
                                    <div>age: {user.age}</div>
                                    <button onClick={() => { props.handleDeleteUser(user.id) }}>X</button>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}
export default DisplayInfo