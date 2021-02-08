import "../index.css";

import React, { useContext } from "react";

import InputTextField from "./InputTextField";
import { MainContext } from "../context/main_context";
import ProjectsCard from "./ProjectsCard";
import ProjectsStepper from "./ProjectsStepper";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "2ch",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
}));

const Projects = () => {
  const { slug } = useParams();
  console.log(slug);
  const classes = useStyles();
  const { epicJiraLink } = useContext(MainContext);
  return (
    <div className={classes.root}>
      <InputTextField
        className='projects-inputField'
        label='Epic jira link :'
        placeholder='eg:https://jira2.cerner.com/browse/DEVACADMY-XXXXX'
        value='sfshs'
        onChange={(event) => {
          changeEpicJiraLink(event);
        }}
      />
      <ProjectsStepper />
      <ProjectsCard />
    </div>
  );
};

export default Projects;
