import React from 'react';
import List from '@material-ui/core/List';
import {useStyles} from "../styles/useStyles";
import {Item} from "./list-item-link/item/item";


export const RouterBreadcrumbs = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <nav className={classes.lists} aria-label="mailbox folders">
                <List>
                    <Item to="/nikah"/>
                    <Item to="/talak"/>
                    <Item to="/trade"/>
                    <Item to="/providing"/>
                    <Item to="/crimes"/>
                    <Item to="/punishment"/>

                </List>
            </nav>
        </div>
    );
}
