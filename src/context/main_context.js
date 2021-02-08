import {
  ADMIN_CREATES_ID,
  CHANGE_GITHUB_EPIC_JIRA_LINK,
  CHANGE_GITHUB_REPO_NAME,
  CHANGE_MENTOR_ID,
  CHANGE_PASSWORD,
  CHANGE_PROJECT_DESC,
  CHANGE_USERID,
  ON_ADMIN_ADD_ID,
  ON_CLICK_GITHUB_RESET_BUTTON,
  ON_CLICK_SIGNIN_BUTTON,
  ON_CLICK_SIGNOUT,
} from "../ActionType.js";
import React, { useContext, useEffect, useReducer } from "react";

import reducer from "../reducers/main_reducer";

const initialState = {
  userID: "",
  password: "",
  isLoggedIn: false,
  isAdmin: false,
  userName: "",
  epicJiraLink: "https://jira2.cerner.com/browse/DEVACADMY-",
  githubRepoName: "",
  mentorID: "",
  projectDescription: "",
  adminID: "",
  adminAddID: "",
};

export const MainContext = React.createContext();

const MainProvider = ({ children, loginJson }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeUserID = (e) => {
    dispatch({ type: CHANGE_USERID, payload: e });
  };
  const changePassword = (e) => {
    dispatch({ type: CHANGE_PASSWORD, payload: e });
  };
  const onClickSignInButtonHandler = (loginJson) => {
    dispatch({
      type: ON_CLICK_SIGNIN_BUTTON,
      payload: loginJson,
    });
  };
  const githubAssociateResetButtonHandler = (e) => {
    dispatch({ type: ON_CLICK_GITHUB_RESET_BUTTON, payload: e });
  };
  const changeEpicJiraLink = (e) => {
    dispatch({ type: CHANGE_GITHUB_EPIC_JIRA_LINK, payload: e });
  };
  const changeGithubRepoName = (e) => {
    dispatch({ type: CHANGE_GITHUB_REPO_NAME, payload: e });
  };
  const changeMentorID = (e) => {
    dispatch({ type: CHANGE_MENTOR_ID, payload: e });
  };
  const changeProjectDescription = (e) => {
    dispatch({ type: CHANGE_PROJECT_DESC, payload: e });
  };
  const onClickSignOut = () => {
    dispatch({ type: ON_CLICK_SIGNOUT });
  };

  const onAdminAddID = (e) => {
    dispatch({ type: ON_ADMIN_ADD_ID, payload: e });
  };
  const AdminCreatesId = (val) => {
    dispatch({ type: ADMIN_CREATES_ID, payload: val });
  };
  return (
    <MainContext.Provider
      value={{
        ...state,
        changeUserID,
        changePassword,
        AdminCreatesId,
        onClickSignInButtonHandler,
        githubAssociateResetButtonHandler,
        changeEpicJiraLink,
        changeGithubRepoName,
        changeMentorID,
        changeProjectDescription,
        onClickSignOut,
        onAdminAddID,
      }}>
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

export const useMainContext = () => {
  return useContext(MainContext);
};
