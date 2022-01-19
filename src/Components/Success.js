import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#6676f3"}}>Sucessfully submitted your appeal!</h1>
                <h4>We will review your appeal as soon as we can! Abusing this system will result in a permanent ban.</h4>
            </Grid>
        );
    }
}

export default Success;
