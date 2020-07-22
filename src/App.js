import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./components/header/header";
import {useStyles} from "./hooks/useStyles";
import NavDrawer from "./components/bar/nav-drawer";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Crimes from "./components/content/crimes/crimes";
import Nikah from "./components/content/nikah/nikah";
import Providing from "./components/content/providing/providing";
import Punishment from "./components/content/punishment/punishment";
import Talak from "./components/content/talak/talak";
import Trade from "./components/content/trade/trade";
import Container from "@material-ui/core/Container";


const App = (props) => {
    const classes = useStyles();

    return (
        <BrowserRouter>
            <Container fixed className={classes.container}>
            <div className={classes.root}>
                <CssBaseline/>
                <Header/>
                <NavDrawer/>
                <Route path='/crimes' component={Crimes}/>
                <Route path='/nikah' component={Nikah}/>
                <Route path='/providing' component={Providing}/>
                <Route path='/punishment' component={Punishment}/>
                <Route path='/talak' component={Talak}/>
                <Route path='/trade' component={Trade}/>
            </div>
            </Container>
        </BrowserRouter>
    );
};

export default App;