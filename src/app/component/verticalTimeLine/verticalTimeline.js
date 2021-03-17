import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { content } from '../../constants/content'
import {
    Box, Button, Switch, Container, Zoom, Slide, Paper, AppBar, Toolbar, Avatar, Divider, Collapse, CardContent,
    CardActions, CardMedia, CardHeader, Grid, Card, Typography, IconButton
} from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
    root: {

    },
    typography: {
        flexGrow: 1,
        align: "center",
        'text-align': 'center',
        alignItems: 'center',
        color: theme.palette.typography.color
    },
    divider: {
        backgroundColor: theme.palette.dividerColor.backgroundColor,
        border: '1.3px solid ' + theme.palette.dividerColor.backgroundColor
    },
    customVerticalTimeline: {
        'width': '80px !important',
        'height': '80px !important',
        'margin-left': '-39px !important'
    }
}));


export default function VerticalTimeLine() {
    const classes = useStyles();


    return (

        <VerticalTimeline>
            {
                content.TimeLine.map(element => {
                    return (
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'linear-gradient(to right top, #b220bb, #9c25bc, #832abd, #682dbd, #4630bb)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid white' }}
                            date={element['date']}
                            iconStyle={{ background: 'white', color: '#fff'}}//, width: '80px', height: '80px', 'margin-left': '-39px'}}
                            icon={<img src={element['image']} style={{ width: '100%', 'height': '100%', 'object-fit': 'contain', 'border-radius': '50%' }} />}
                            animate={true}>
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <Box m={0.5} />
                            <Divider className={classes.divider} />
                            <h5 className="vertical-timeline-element-subtitle">{element.description}</h5>
                            <p>
                                Designation : {element.designation}
                            </p>
                        </VerticalTimelineElement>

                    );
                })
            }
        </VerticalTimeline>

    )
};