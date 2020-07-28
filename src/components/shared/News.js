import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Divider} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/styles";

function News({newsItem}) {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 30,
                paddingBottom: 30
            },
            button: {
                fontWeight: "bold",
                color: "darkblue",
                fontFamily: "Quicksand"
            },
            icon: {
                color: "darkblue",
            },
            image: {
                height: 250,
                width: "100%"
            }
        }
    });

    const classes = useStyles();

    const {image, summary, dateCreated, author, title, slug} = newsItem;

    return (
        <Card elevation={1} raised={true} variant="elevation">
            <CardMedia
                className={classes.image}
                component="img"
                src={image}/>
            <CardContent>
                <p>
                    <span className="font-size-small font-weight-bold">{author}</span> <span
                    className="separator">|</span> <span
                    className="font-size-small font-weight-bold">{new Date(dateCreated).toDateString()}</span></p>
                <p className="font-weight-bold font-size-medium grey-text uppercase">{title}</p>
                <p className="font-size-small grey-text">{summary}</p>
            </CardContent>
            <Divider variant="fullWidth"/>
            <CardActions>
                <Button
                    className={classes.button}
                    fullWidth={true}
                    size="small"
                    endIcon={<ArrowForward className={classes.icon}/>}>
                    <Link
                        className="font-weight-bold nav-link"
                        to={`/events/${slug}`}>
                        Read More
                    </Link>
                </Button>
            </CardActions>
        </Card>
    )
}

export default News;
