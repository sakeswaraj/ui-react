import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import React, { useContext } from "react";

import AddAsAdmin from "./AddAsAdmin";
import { AiOutlineSetting } from "react-icons/ai";
import AppBar from "@material-ui/core/AppBar";
import DevCenter from "./DevCenter";
import { FaUserCircle } from "react-icons/fa";
import GithubAccess from "./GithubAccess";
import { MainContext } from "../context/main_context";
import Projects from "./Projects";
import SignUp from "./SignUp";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
  navspace: {
    display: "flex",
    justifyContent: "space-around",
  },
  navspaceelements: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "50%",
  },
  spanlabels: {
    color: "white",
    textDecoration: "none",
  },
  routerlink: {
    textDecoration: "none",
  },
  MuiPaperroot: {
    height: "20px",
  },
}));

export default function DevNavBar() {
  const classes = useStyles();
  const { isAdmin, onClickSignOut } = useContext(MainContext);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar className={classes.navspace}>
            <div className={classes.navspaceelements}>
              <Typography variant='h6' className={classes.title}>
                <Link className={classes.routerlink} to='/'>
                  <span className={classes.spanlabels}>myDevCenter</span>
                </Link>
              </Typography>
              <Typography variant='h6' className={classes.title}>
                <Link className={classes.routerlink} to='/github'>
                  <span className={classes.spanlabels}>Github Access</span>
                </Link>
              </Typography>
              <Typography variant='h6' className={classes.title}>
                <Link className={classes.routerlink} to='/projects'>
                  <span className={classes.spanlabels}>Projects</span>
                </Link>
              </Typography>
            </div>
            <Link
              className={classes.routerlink}
              onClick={() => {
                onClickSignOut();
              }}>
              <span className={classes.spanlabels}>
                <FaUserCircle style={{ fontSize: "30px" }} />
                Log out
              </span>
            </Link>
            {isAdmin ? (
              <Link className={classes.routerlink} to='/settings'>
                <span className={classes.spanlabels}>
                  <AiOutlineSetting
                    style={{ fontSize: "30px", color: "white" }}
                  />
                </span>
              </Link>
            ) : null}
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path='/'>
            <DevCenter />
          </Route>
          <Route exact path='/github'>
            <GithubAccess />
          </Route>
          <Route exact path='/projects'>
            <Projects />
          </Route>
          <Route exact path='/settings'>
            <AddAsAdmin />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
