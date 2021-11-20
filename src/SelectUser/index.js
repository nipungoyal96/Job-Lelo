import React, { useEffect } from 'react';
import Card from '../Common/Card';
import NoUser from '../Common/NoUSer';

const SelectUser = (props) => {

    useEffect(() => {
        props.users && props.setVisibleUsers(props.users);
    }, [props.users]);

    return <div key="Select User" className="component_container">

        {props.filteredUsers.length ? <>
            {props.filteredUsers?.map((user) =>
                <Card key={user.id} user={user} />
            )} </> :
            <NoUser />
        }

    </div>
}

export default SelectUser;