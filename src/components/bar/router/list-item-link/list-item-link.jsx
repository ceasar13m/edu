import ListItem from "@material-ui/core/ListItem";
import {Link as RouterLink} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React from "react";

const breadcrumbNameMap = {
    '/nikah': 'Никах',
    '/nikah/questions': 'Төрле сораулар',
    '/talak': 'Талак кылу',
    '/talak/questions': 'Төрле сораулар',
    '/trade': 'Сәүдә итү',
    '/trade/questions': 'Төрле сораулар',
    '/providing': 'Тәэмин итү',
    '/providing/questions': 'Төрле сораулар',
    '/crimes': 'Җинаятьләр',
    '/crimes/questions': 'Төрле сораулар',
    '/punishment': 'Әл-Худуд',
    '/punishment/questions': 'Төрле сораулар',
};

const ListItemLink = (props) => {
    const { to, open, ...other } = props;
    const primary = breadcrumbNameMap[to];

    return (

            <ListItem button component={RouterLink} to={to} {...other}>
                <ListItemText primary={primary} />
                {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
            </ListItem>

    );
};

export default ListItemLink;