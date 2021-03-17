import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';


import { AppBar, Box, Switch, Zoom, Slide, Paper, Avatar, Collapse, CardContent, CardActions, CardMedia, CardHeader, Grid, Card, Typography, IconButton, Toolbar } from '@material-ui/core';
import { bounce, tada, bounceIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import {content} from '../../constants/content';

const animationStyle = {
  bounceIn: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(bounceIn, 'bounce')
  }
}
export default function SkillListUi(props) {
  return (Object.keys(content.skillList).map(skillListTopic => {
    return (
      <StyleRoot>
        <div style={animationStyle.bounceIn} >
          <Box m={2}>
            <Card elevation={1} style={{}} >
              <CardHeader
                style={{ textAlign: 'center', "backgroundColor": "#e05e9b", color: 'white' }}
                title={skillListTopic}
              />
              <Box m={2}>
                {
                  content.skillList[skillListTopic].map(item => {
                    return (<Typography variant="h6" component="h6" alignItems="center" justifyContent="center">
                      {item}
                    </Typography>)
                  })
                }
              </Box>
            </Card>
          </Box>
        </div>
      </StyleRoot>
    )
  }))
};