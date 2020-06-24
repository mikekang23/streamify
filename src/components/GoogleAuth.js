import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '103687231676-m0cq3j15k4h525ldgcot9oeohn6o2b33.apps.googleusercontent.com',
        scope: 'email'
      })
    });
  }
  render() {
    return <div>Google Auth</div>
  }
}

export default GoogleAuth;
