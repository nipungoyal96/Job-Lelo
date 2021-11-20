import React, { useEffect, useState } from 'react';
import Loader from '../Common/Loader';
import Pagination from '../Common/Pagination';
import Header from '../Header';
import Search from '../Search';

const   HomeRoute = (props) => {
    
    const [ searchInput, setSearchInput ] = useState('');
    const [ searchClicked, setSearchClicked ] = useState(false);

    const setSearch = () => {
        let filteredUsers
        if(!searchInput || searchInput === '') filteredUsers = props.visibleUsers; 
        else filteredUsers = props.visibleUsers.filter((user) => user.name.toLowerCase().includes(searchInput.toLowerCase()));
        props.setUsers(filteredUsers);
        setSearchClicked(!searchClicked);
    }


    const setInput = (e) => {
        setSearchInput(e.target.value);
    }

    return (        
        <div key={props.Component.name}>
            {!props.loading ? <><Header showTabs />
            <Search setSearch = {setSearch} setInput = {setInput} visibleUsers = {props.visibleUsers} users={props.users} setUsers={props.setUsers}/> 
            {props.Component}
            { ((!searchInput || searchInput === '') && props.visibleUsers.length  > 6) && <Pagination searchInput = {searchInput} searchClicked= {searchClicked} visibleUsers = {props.visibleUsers} filteredUsers={props.filteredUsers} setUsers={props.setUsers} pages={ (props.visibleUsers.length / 6)  } /> }
            </>
        : <Loader/> }
        </div>
    )
}


export default HomeRoute;

