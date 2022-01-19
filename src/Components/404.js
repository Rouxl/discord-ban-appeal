import React, {Component} from 'react';
import PageNotFound from '../Images/recordscrath.png'
import {NavLink} from "react-router-dom";
class PageNotFoundError extends Component
{
    render()
    {
        return (
            <div>
                <img alt="404 tunic" src={PageNotFound}/>
                <h1>¯\_(ツ)_/¯</h1>
                <h2>There used to be a page here! But now there is not...</h2>
                <NavLink to="/">
                    Click here to return ¯\_(ツ)_/¯
                </NavLink>
            </div>
        );
    }
}

export default PageNotFoundError;
