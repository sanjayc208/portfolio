import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Paper';
import logo from '../../../assets/image/spacebox.png';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: '100%',
    },
    logo: {
      },
    cardSizing: {
        padding: '40px 30px'
    }  
});


const LoginPage = ({ matchProps }) => {
    const classes = useStyles();
    const history = useHistory()

    return (
        <Card elevation={4} style={{padding: '40px 30px'}}>
        <Grid container direction="column"
            justify="center"
            alignItems="center"
            spacing={7}>
            <Grid container item xs={12} spacing={3}>
                <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <TextField fullWidth id="outlined-basic" label="User Id" variant="outlined" />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <TextField id="outlined-basic" label="Password" type="password" variant="outlined" />
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Button variant="contained" color="primary" style={{background: 'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)'}} fullWidth  onClick={() => {history.push('/home')}}>
                    Log In</Button>
            </Grid>
        </Grid></Card>
    );
};

export default LoginPage  