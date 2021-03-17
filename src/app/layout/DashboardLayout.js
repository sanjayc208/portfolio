import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Header from '../component/header/header';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <div className="main">{children}</div>  
    </div>  
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  
  console.log("Component---->",Component);
  console.log("...rest---->",rest);
  return (  
    <Route {...rest} render={matchProps => (
      <DashboardLayout>
        <Header />
        <Box m={10} />
        <Component {...matchProps} />
      </DashboardLayout>
    )} />  
  )  
};  



  
export default DashboardLayoutRoute;  