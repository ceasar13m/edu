import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import React from "react";
import {useStyles} from "../../hooks/useStyles";
import {connect} from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import {useTheme} from "@material-ui/core/styles";
import {Types} from "../../redux/Types";
import Divider from "@material-ui/core/Divider";
import {RouterBreadcrumbs} from "./router/router-breadcrumbs";

const NavDrawer = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.isDrawerOpen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <h3>Эчтәлек</h3>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </div>

            <Divider/>
            <RouterBreadcrumbs/>
        </Drawer>
    )

};


export default connect(
    state => {
        return {
            isDrawerOpen: state.reducer.isDrawerOpen,
        }
    },
    dispatch => ({
        handleDrawerClose: () => {
            dispatch({type: Types.HIDE_DRAWER})
        },
    })
)(NavDrawer);