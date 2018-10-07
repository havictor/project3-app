import React from 'react';
import Auth from '../modules/Auth';
import Dashboard from '../components/User/Dashboard';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        console.log("this is user information:")
        console.log(xhr.response.user)
        this.setState({
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  render() {
    return (<Dashboard user={this.state.user} />);
  }

}

export default DashboardPage;
