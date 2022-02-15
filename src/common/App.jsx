import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './custom.scss';
import MyRouting from './MyRouting';
// import AuthProvider from './AuthProvider';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        {/* <AuthProvider> */}
        <MyRouting />
        {/* </AuthProvider> */}
      </BrowserRouter>
    );
  }
}
