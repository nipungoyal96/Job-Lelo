import React, { useEffect } from 'react';
import Card from '../Common/Card';
import NoUser from '../Common/NoUSer';

const SelectedUser = (props) => {

    useEffect(() => {
        setSelectedUsers();
    }, [props.users]);


    const setSelectedUsers = () => {
        let selectedUser = localStorage.getItem('selectedUsers');
        if (!selectedUser) selectedUser = [];
        const visibleUsers = props.users.filter((user) => selectedUser.indexOf(user.id) !== -1);
        props.users.length && props.setVisibleUsers(visibleUsers);
        props.users.length && props.setUsers(visibleUsers);
    }


    return <div key="Selected User" className="component_container">

        {props.filteredUsers.length ? <>
            {props.filteredUsers?.map((user) =>
                <Card key={user.id} user={user} />
            )} </> :
            <NoUser />
        }
    </div>
}

export default SelectedUser;