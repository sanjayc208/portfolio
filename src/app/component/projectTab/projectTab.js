import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    Paper, Tabs, Tab, Typography, TabPanelCard, Card, Grid, Container,Fade,Grow,Box,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button
} from '@material-ui/core';
import { content } from '../../constants/content';
import { bounce,fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const animationStyle = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }


const StyledTabs = withStyles({
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            maxWidth: 40,
            width: '100%',
            backgroundColor: '#635ee7',
        },
    },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

let tabCurrentData = [];

function a11yProps(index) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    tab: {
        root: {
            flexGrow: 1,
        },
        padding: {
            padding: theme.spacing(3),
        },
        demo1: {
            backgroundColor: theme.palette.background.paper,
        },
    },
    card: {
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
            backgroundColor: 'white'
        },
    },
    projectContainer: {
        root: {
            flexGrow: 1,
        },
        card: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }
}));


function ProjectCard(props) {
    const classes = useStyles();
    let [checked, setChecked] = React.useState(false);
    let [cardDetails, setCardDetails] = React.useState({});
    let propsData = {};
    React.useEffect(() => {
        setChecked(false);
        setTimeout(() => {
            setCardDetails(props.dataObj)
            setChecked(true);
          }, 300);

    }, [props.dataObj])

    return (
        // <StyleRoot>
        // <div style={animationStyle.bounce} >
        <React.Fragment>
            <Grow in={checked}>
                <Card className={classes.card.root} elevation={2}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.card.media} style={{ 'background-color': 'white', 'text-align': 'center' }}
                            // imageUrl={(props.dataObj.image)}
                            title="Contemplative Reptile"
                        >{<img src={(cardDetails['image'])} ></img>}</CardMedia>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {cardDetails['title']}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {cardDetails['description']}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grow>
            </React.Fragment>
        // </div>
        // </StyleRoot>
    );

}
export default function ProjectTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        tabCurrentData = content.TabData[newValue].tiles;
        // const forceUpdate = ProjectCard();
        setValue(newValue);
        console.log("setValue->",value)
    };

    return (
        <div className={classes.tab.root}>
            <div className={classes.tab.demo2}>
                <StyledTabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="secondary"
                    centered>{
                        content.TabData.map(element => {
                            return <Tab label={element.title} />
                        })
                    }
                </StyledTabs>
                <div className={classes.projectContainer.root}>
                    <Box m={2}></Box>
                    <Container maxWidth="lg">
                        <Grid container style={{height: '500px'}} spacing={3}>
                            {
                                content.TabData[value]['tiles'].map(data => {
                                    return (
                                        <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
                                            <ProjectCard dataObj={data} />
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Container>
                    {/* <ProjectCard /> */}
                </div>
            </div>
        </div>
    );
}
