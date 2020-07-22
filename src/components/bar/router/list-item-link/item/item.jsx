import ListItemLink from "../list-item-link";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import React from "react";
import {useStyles} from "../../../styles/useStyles";


export const Item = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    return (
        <div>
            <ListItemLink to={props.to} open={open} onClick={handleClick}/>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding>
                    <ListItemLink to="/nikah/questions" className={classes.nested}/>
                </List>
            </Collapse>
        </div>
    );
};