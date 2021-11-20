import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate();

    return <div  onClick={() => !props.isUserPage && navigate(`/user/${props.user.id}`)} className="card">
        <img src={props.user.Image} alt="Avatar" />
        <div className="container">
            <h4><b>{props.user.name}</b></h4>
        </div>
    </div>
}

export default Card;