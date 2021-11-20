import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SelectUser from "../SelectUser";
import SelectedUser from "../SelectedUser";
import RejectedUser from "../RejectedUser";
import UserPage from "../UserPage";
import HomeRoute from "./HomeRoute";


const Routing = (props) => {
    
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomeRoute {...props} Component = {<SelectUser {...props}/>} />} />
            <Route path="/shortlisted" element={<HomeRoute {...props} Component = {<SelectedUser {...props}/>} />} />
            <Route path="/rejected" element={<HomeRoute {...props} Component = {<RejectedUser {...props} />} />} />
            <Route path="/user/:id" element={<UserPage users={props.users} />} />
        </Routes>   
      </Router>
  );
}   

export default Routing;