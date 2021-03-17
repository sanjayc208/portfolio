import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AvatarIcon from '../../../assets/image/avatar.png';
import BackgroundImage from '../../../assets/image/background-03.jpg';
import ReactCardFlip from 'react-card-flip';
import { content } from '../../constants/content';

import { Box, Button, Switch, Container, Zoom, Slide, Paper, AppBar, Toolbar, Avatar, Divider, Collapse, CardContent,Tabs, Tab,
  CardActions, CardMedia, CardHeader, Grid, Card, Typography, IconButton } from '@material-ui/core';

//================Child Components========================= 
import SkillListUi from '../../component/skillListUi/skillListUi';
import VerticalTimeline from '../../component/verticalTimeLine/verticalTimeline';
import ProjectTabs from '../../component/projectTab/projectTab';

import { Timeline,TimelineItem,TimelineSeparator,TimelineConnector,TimelineContent,TimelineOppositeContent,TimelineDot} from '@material-ui/lab';

import { bounce, tada, bounceIn, lightSpeedIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import { useMediaQuery } from 'react-responsive'

let IsMobile = () => {
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
return isTabletOrMobile;
}

const animationStyle = {
  lightSpeedIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(lightSpeedIn, 'bounce')
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '800px',
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100px',
      height: '400px'
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: '250px',
      height: '400px'
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '800px',
      height: '250px'
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1000px',
      height: '250px'
    },
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '250px'
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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
    width: theme.spacing(14),
    height: theme.spacing(14)
  },
  backgroundSkillList: {
    width: '100%',
    position: 'absolute',
    "background-image": "url(" + BackgroundImage + ")",
    "background-size": '100%',
    'z-index': '-1',
    [theme.breakpoints.down('xs')]: {
      height: '500px',
    },
    [theme.breakpoints.down('sm')]: {
      height: '500px',
    },
    [theme.breakpoints.up('md')]: {
      height: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      height: '250px',
    },
  },
  customVerticalTimeline:{
    'width': '80px !important',
    'height': '80px !important',
    'margin-left': '-39px !important'
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = (e) => {
    setIsFlipped(!isFlipped);
  }

  return (
    <Grid container
      justify="center"
      alignItems="center"
      direction="column">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Zoom in={true} style={{ transitionDelay: '100ms' }}>
          <Card onMouseEnter={handleClick} className={classes.root} elevation={4}>
            <Grid container alignItems="center" justify="center" item xs={12} md={12} sm={12} spacing={13} >
              <Avatar aria-label="recipe" className={classes.avatar} src={AvatarIcon}>
              </Avatar>
              <StyleRoot>
                <div style={animationStyle.lightSpeedIn} >
                  <CardHeader style={{ textAlign: 'center' }}
                    titleTypographyProps={{ variant: 'h3' }}
                    title={content.userDetails['name']}
                    subheader={content.userDetails['dob']}/>
                </div></StyleRoot>
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  {content.userDetailsFrontSide}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
              </CardActions></Grid>
          </Card>

        </Zoom>
        <Card onMouseLeave={handleClick} className={classes.root}>
          <Grid container alignItems="center" justify="center" item xs={12} md={12} sm={12} >
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {content.userDetailsBackSide}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions></Grid>
        </Card>
      </ReactCardFlip>

      <Box m={2} pt={3} />

      <div style={{ position: 'relative', width: '100%' }}>
        <div className={classes.backgroundSkillList}></div>

        {/* Skill Set Element */}
        <Grid style={{ "margin-top": '5%', 'z-index': '2' }} container alignItems="center" justify="center" item xs={12} md={12} sm={12} spacing={13} >
          <SkillListUi />
        </Grid>

      </div>

      <Box m={2} pt={3} />
      <div>
        <Typography
          variant="h4"
          className={classes.typography} >Work Experience</Typography>
        <Box m={2} >
          <Divider className={classes.divider} />
        </Box>
      </div>
      <Container maxWidth="md">
        <Typography
          variant="h6"
          color="inherit"
          className={classes.typography}>
          {content.workExperienceText}
        </Typography>
      </Container>

      {/* Vertifical TimeLine Element */}
      <VerticalTimeline />

      <Box m={2} pt={3} />
      <div>
        <Typography
          variant="h4"
          className={classes.typography} >Projects</Typography>
        <Box m={2} >
          <Divider className={classes.divider} />
        </Box>
      </div>
      <ProjectTabs />
    </Grid>
  );
}
