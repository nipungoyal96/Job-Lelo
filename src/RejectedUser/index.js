import React, { useEffect } from 'react';
import Card from '../Common/Card';
import NoUser from '../Common/NoUSer';

const RejectedUser = (props) => {

    useEffect(() => {
        let rejectedUser = localStorage.getItem('rejectedUsers');
        if (!rejectedUser) rejectedUser = [];
        const visibleUsers = props.users.filter((user) => rejectedUser.indexOf(user.id) !== -1);
        props.users.length && props.setVisibleUsers(visibleUsers);
        props.users.length && props.setUsers(visibleUsers);
    }, [props.users]);

    return <div key="Rejected User" className="component_container">

        {props.filteredUsers.length ? <>
            {props.filteredUsers?.map((user) =>
                <Card key={user.id} user={user} />
            )} </> :
            <NoUser />
        }

    </div>
}

export default RejectedUser;