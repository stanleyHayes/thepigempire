import React from "react";
import {CardContent, Card, CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import "../../App.css";

const Facility = ({image, name, description}) => {

    const useStyles = makeStyles(theme => {
        return {
            image: {
                height: 250,
                width: "100%"
            }
        }
    });

    const classes = useStyles();


    return (
        <div className="shadow">
            <Card elevation={0} raised={true} variant="elevation">
                <CardMedia className={classes.image} component="img" src={image} />
                <CardContent>
                    <p className="uppercase text font-size-medium font-weight-bold">{name}</p>
                    <p className="text font-size-medium font-weight-500">{description}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Facility;
