import React from 'react';
import Grid from "@material-ui/core/Grid";
import {useLocation} from "react-router-dom";

const ErrorPath = () => {
    const query = new URLSearchParams(useLocation().search);
    const msg = query.get("msg");
    return (
        <Grid item>
            <h1 style={{textAlign: "center", color: "#6676f3"}}>Oops! We did something wrong.</h1>
            <h4>{msg}</h4>
        </Grid>
    )
}

export default ErrorPath;
