import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="header">
            <a onClick={() => navigate('/')} className="logo">Job<span className="color_yellow">Dedo</span></a>
            {props.showTabs && <div className="header-right">
                <a onClick={() => navigate('/')} className={location.pathname == '/' && "active"} >All User</a>
                <a onClick={() => navigate('/shortlisted')} className={location.pathname == '/shortlisted' && "active"}>Shortlisted User</a>
                <a onClick={() => navigate('/rejected')} className={location.pathname == '/rejected' && "active"}> Rejected User</a>
            </div>}
        </div>
    )
};

export default Header;