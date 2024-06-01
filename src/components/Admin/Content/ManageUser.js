import ModalCreateUser from "./ModalCreateUser";

const ManageUser = (props) => {
    return (
        <div classNameName="manage-user-container">
            <div classNameName="title"></div>
            <div classNameName="user-content">
                <button>Add new user</button>
                <div>
                    <ModalCreateUser/>
                </div>

            </div>
        </div>
    )
}

export default ManageUser;