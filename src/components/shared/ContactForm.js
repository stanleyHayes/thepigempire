import React, {useState} from "react";
import {Card, CardContent, TextField, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import validator from "validator";
const ContactForm = () => {


    const useStyles = makeStyles(theme => {
        return {
            button: {
                fontFamily: "Quicksand",
                color: "white",
                fontWeight: "bold",
                marginTop: 8,
                paddingTop: 8,
                paddingBottom: 8,
                backgroundColor: "purple"
            }
        }
    });

    const classes = useStyles();


    const [contact, setContact] = useState({});
    const [error, setError] = useState({});

    const {name, email, subject, phone, message} = contact;

    const handleChange = event => {
        setContact({...contact, [event.target.name]: event.target.value});
    }


    const handleSubmit = event => {
        event.preventDefault();

        if (!name) {
            setError({...error, name: "Name required"});
            return;
        } else {
            setError({...error, name: null});
        }

        if (!email) {
            setError({...error, email: "Email required"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!validator.isEmail(email)) {
            setError({...error, email: "Enter valid email"});
            return;
        } else {
            setError({...error, email: null});
        }

        if (!phone) {
            setError({...error, phone: "Phone required"});
            return;
        } else {
            setError({...error, phone: null});
        }

        if (!validator.isMobilePhone(phone)) {
            setError({...error, phone: "Enter valid phone number"});
            return;
        } else {
            setError({...error, phone: null});
        }

        if (!subject) {
            setError({...error, subject: "Subject required"});
            return;
        } else {
            setError({...error, subject: null});
        }

        if (!message) {
            setError({...error, message: "Message required"});
            return;
        } else {
            setError({...error, message: null});
        }

        console.log(contact);
    }

    return (
        <Card elevation={1} variant="elevation" raised={true}>
            <CardContent>
                <form>
                    <p className="text-align-center text font-weight-bold uppercase">We're happy to hear from you</p>
                    <div>
                        <TextField
                            fullWidth={true}
                            margin="dense"
                            placeholder="Enter name"
                            label="Name"
                            onChange={handleChange}
                            value={name}
                            error={error.name}
                            type="text"
                            variant="outlined"
                            name="name"
                            helperText={error.name}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth={true}
                            margin="dense"
                            placeholder="Enter email"
                            label="Email"
                            onChange={handleChange}
                            value={email}
                            error={error.email}
                            type="email"
                            variant="outlined"
                            name="email"
                            helperText={error.email}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth={true}
                            margin="dense"
                            placeholder="Enter phone"
                            label="Phone"
                            onChange={handleChange}
                            value={phone}
                            error={error.phone}
                            type="tel"
                            variant="outlined"
                            name="phone"
                            helperText={error.phone}
                        />
                    </div>
                    <div>
                        <TextField
                            fullWidth={true}
                            margin="dense"
                            placeholder="Enter subject"
                            label="Subject"
                            onChange={handleChange}
                            value={subject}
                            error={error.subject}
                            type="text"
                            variant="outlined"
                            name="subject"
                            helperText={error.subject}
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth={true}
                            margin="dense"
                            placeholder="Enter message"
                            label="Message"
                            onChange={handleChange}
                            value={message}
                            error={error.message}
                            type="text"
                            variant="outlined"
                            name="message"
                            helperText={error.message}
                            multiline={true}
                            rows={5}
                        />
                    </div>

                    <Button
                        className={classes.button}
                        variant="outlined"
                        size="large"
                        fullWidth={true}
                        onSubmit={handleSubmit}
                        onClick={handleSubmit}>
                        Send message
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default ContactForm;
