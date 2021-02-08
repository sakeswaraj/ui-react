import React, { useContext } from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputTextField from "./InputTextField";
import { MainContext } from "../context/main_context";
import "../index.css";

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
  button: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  textarea: {
    width: "45% ",
    borderRadius: "4px",
    marginRight: "140px",
  },
  textfield: {
    width: "40%",
  },
}));

function GithubAssociate() {
  const classes = useStyles();
  const {
    epicJiraLink,
    githubRepoName,
    mentorID,
    projectDescription,
    userID,
    changeEpicJiraLink,
    changeUserID,
    changeGithubRepoName,
    changeMentorID,
    changeProjectDescription,
    githubAssociateResetButtonHandler,
  } = useContext(MainContext);

  return (
    <div className={classes.root}>
      <h4 className="github-associate-header">
        Request github access and repository creation
      </h4>
      <div className={classes.textfield}>
        <InputTextField
          label="Epic jira link :"
          placeholder="eg:https://jira2.cerner.com/browse/DEVACADMY-XXXXX"
          value={epicJiraLink}
          onChange={(event) => {
            changeEpicJiraLink(event);
          }}
        />
        <InputTextField
          label="Repository name :"
          placeholder="eg:myDevcenter"
          value={githubRepoName}
          onChange={(event) => {
            changeGithubRepoName(event);
          }}
        />
        <InputTextField
          label="User ID :"
          placeholder="eg:AB1234566"
          value={userID}
          onChange={(event) => {
            changeUserID(event);
          }}
        />
        <InputTextField
          label="Mentor ID :"
          placeholder="eg:AB1234566"
          value={mentorID}
          onChange={(event) => {
            changeMentorID(event);
          }}
        />
      </div>
      <div className={classes.textfield} className="github-associate-text">
        <label className="github-associate-label">Project Description:</label>
        <TextareaAutosize
          className={classes.textarea}
          label="Project Description :"
          rowsMin={3}
          placeholder="eg:myDevCenter is a portal to access..."
          value={projectDescription}
          onChange={(event) => {
            changeProjectDescription(event);
          }}
          InputLabelProps={{ style: { fontSize: 13 } }}
        />
      </div>

      <div className={classes.button}>
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) => {
            githubAssociateResetButtonHandler(event);
          }}
        >
          Reset
        </Button>
        <Button variant="contained" color="primary">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default GithubAssociate;
