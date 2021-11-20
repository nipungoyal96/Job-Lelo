import React, { useEffect, useState } from 'react';

 const Pagination = (props) => {
    const pages = []; 
    const [ currnetPage , setCurrentPage ] = useState(1);
    
    useEffect(() => {
        setCurrntPage(1);
    }, [props.searchClicked]);

    const setCurrntPage = ( pageNo ) => {
        setCurrentPage(pageNo);
        let newUsers;

        if( props.searchInput !== '') newUsers = props.filteredUsers
        else newUsers = props.visibleUsers

        if(pageNo < props.pages) {
            newUsers = newUsers.slice((pageNo - 1) * 6, 6);
        } else {
            newUsers = newUsers.slice((pageNo - 1) * 6);
        }

        props.setUsers(newUsers);
    }

    for(let i=1 ; i  <= Math.ceil(props.pages)  ; i++ ) {
         pages.push(<a key={i} onClick={() => setCurrntPage(i)} className={i  === currnetPage ? 'active' : ''}> {i} </a>)
    }

    console.log('here');

   return (
   <div className="center ">
       <div className = "pagination" >
        {
            pages.map(page => page)
        }
        </div>
    </div>
    )
}

export default Pagination;