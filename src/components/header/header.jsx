import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from "clsx";
import {connect} from "react-redux";
import {Types} from "../../redux/Types";
import {useStyles} from "../../hooks/useStyles";


const Header = (props) => {
    const classes = useStyles();
    return (
            <AppBar position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: props.isDrawerOpen,
                    })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, props.isDrawerOpen && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h3" noWrap>
                        فقه المعاملات
                    </Typography>
                </Toolbar>
            </AppBar>

    );
};

export default connect(
    state => {
        return {
            isDrawerOpen: state.reducer.isDrawerOpen,
        }
    },
    dispatch => ({
        handleDrawerOpen: () => {
            dispatch({type: Types.SHOW_DRAWER})
        },
    })
)(Header);