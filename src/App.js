
import Router from './Router/routes';
import './App.css';
import { Component } from 'react';
import APIService from './Services/ApiService';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      users: [],
      filteredUsers: [],
      visibleUsers: [],
      loading: true,
    }
  }
  componentDidMount() {
    this.getUsers();
  }


  getUsers = () => {
    APIService.GetUsersData().then(data => 
      this.setState({ users: JSON.parse(data) }, () => this.setState({ loading: false}))
    )
  }

  setUsers = (users) => {
    this.setState({filteredUsers: users});
  }

  setVisibleUsers = (users) => {
    this.setState({ visibleUsers: users})
  }

  render() {
  return (
    <Router users = {this.state.users} loading = {this.state.loading} filteredUsers = {this.state.filteredUsers} setUsers = {this.setUsers} visibleUsers = {this.state.visibleUsers} setVisibleUsers={this.setVisibleUsers} />
  );
  }
}

export default App;
