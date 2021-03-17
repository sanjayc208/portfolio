import React, { Component } from 'react';  
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';  
  
/** Layouts **/  
import LoginLayoutRoute from "./layout/LoginLayout";  
import DashboardLayoutRoute from "./layout/DashboardLayout";  
  
/** Components **/  
import UserPage from './component/UserPage/UserPage';  
import LoginPage from './component/Login/LoginPage'  
  
/* 
   App 
 */  
class App extends Component {  
  render() {  
    return (  
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/login" />  
          </Route>  
          <LoginLayoutRoute path="/login" component={LoginPage} />  
          <DashboardLayoutRoute path="/home" component={UserPage} />  
        </Switch>  
      </Router>  
    );  
  }  
}  
  
export default App;   