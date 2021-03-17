import React, { Component } from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import { Route } from 'react-router-dom';  
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
const LoginLayout = ({ children }) => (                         
    <div>  
      {/* <p>This is the First Layout</p>   */}
      {children}                       
    </div>  
  );  
  
  const LoginLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <Grid
          container
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
            <LoginLayout>
              <Component {...matchProps} />
            </LoginLayout>
        </Grid> 
      )} />  
    )  
  };  
  
export default LoginLayoutRoute;  