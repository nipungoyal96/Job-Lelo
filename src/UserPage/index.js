import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../Common/Card';
import NoUser from '../Common/NoUSer';
import Header from '../Header';

const UserPage = (props) => {
    const params = useParams();
    const user = props.users.find((user) => user.id == params.id);
    const navigate = useNavigate();

    const selectCandidate = (id) => {
        let selectedUsers = JSON.parse(localStorage.getItem('selectedUsers'));
        if(!selectedUsers) selectedUsers = [];

        if(selectedUsers.indexOf(id) === -1) {
            selectedUsers.push(id);
            localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers));
            let rejectedUsers = JSON.parse(localStorage.getItem('rejectedUsers'));
            const index = rejectedUsers?.indexOf(id);
            if(index !== undefined && index !== -1) {
                rejectedUsers.splice(index, 1);
                localStorage.setItem('rejectedUsers', JSON.stringify(rejectedUsers))
            }
            navigate('/');          
        }
    }

    const rejectUser = (id) => {
        let rejectedUsers = JSON.parse(localStorage.getItem('rejectedUsers'));
        if(!rejectedUsers) rejectedUsers = [];
        if(rejectedUsers.indexOf(id) === -1) {

            rejectedUsers.push(id);
            localStorage.setItem('rejectedUsers', JSON.stringify(rejectedUsers));
            let selectedUsers = JSON.parse(localStorage.getItem('selectedUsers'));
            const index = selectedUsers?.indexOf(id);
            if(index !== undefined && index !== -1) {
                selectedUsers.splice(index, 1);
                localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers))
            }
            navigate('/');
        }
    }

    let isSelectedUser;
    let isRejectedUser;

    if(user) {
         isSelectedUser = localStorage.getItem('selectedUsers') && JSON.parse(localStorage.getItem('selectedUsers'))?.indexOf(user.id) !== -1 && true ;
         isRejectedUser = localStorage.getItem('rejectedUsers') &&JSON.parse(localStorage.getItem('rejectedUsers'))?.indexOf(user.id) !== -1 && true ;
    }
    

    return <> 
        <Header />
        <div className="component_container userPage">   
            {user ? <> 
            <Card IsUserPage user={user}/>
            <div className="buttons">
                <button className={!isSelectedUser ? "btn btn-green" : "btn btn-disabled"} onClick={() => !isSelectedUser && selectCandidate(user.id)}>Select Candidate</button>
                <button className={!isRejectedUser ? "btn btn-red" : "btn btn-disabled"} onClick={() => !isRejectedUser && rejectUser(user.id)}>Reject Candidate</button>
            </div>
            </> : <NoUser />}
        </div>
    </>
}

export default UserPage;