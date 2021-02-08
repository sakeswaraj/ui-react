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

import { loginJson } from "../utils/signIn-mock";

const main_reducer = (state, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case CHANGE_USERID: {
      let tempUserID = action.payload.target.value;
      if (!tempUserID.match(/^[0-9a-zA-Z]+$/)) {
        alert(`special characters are not allowed as ${tempUserID.slice(-1)}`);
      } else {
        newState.userID = action.payload.target.value;
        console.log("modified state of userid:", state);
        return newState;
      }
    }

    case CHANGE_PASSWORD: {
      newState.password = action.payload.target.value;
      console.log("modified state pwd:", state);
      return newState;
    }

    case ON_CLICK_SIGNIN_BUTTON: {
      if (state.userID !== "" && state.password !== "") {
        // {
        //   action.payload.map((item) => {
        //     if (
        //       state.userID === item.userID &&
        //       state.password === item.password
        //     ) {
        //       newState.isAdmin = item.isAdmin;
        //       newState.isLoggedIn = !state.isLoggedIn;
        //       newState.userName = item.userName;
        //       console.log(newState);

        //       return newState;
        //     }
        //   });
        // }
        const var2 = action.payload.filter(
          (item) =>
            state.userID === item.userID && state.password === item.password
        );
        newState.isAdmin = var2[0].isAdmin;
        newState.isLoggedIn = !state.isLoggedIn;
        newState.userName = var2[0].userName;
        console.log(newState);

        return newState;
      } else {
        alert(`UserName or Password cannot be empty`);
      }
    }
    case ON_CLICK_GITHUB_RESET_BUTTON: {
      newState.epicJiraLink = "";
      newState.githubRepoName = "";
      newState.userID = "";
      newState.mentorID = "";
      newState.projectDescription = "";

      return newState;
    }
    case CHANGE_GITHUB_EPIC_JIRA_LINK: {
      newState.epicJiraLink = action.payload.target.value;
      return newState;
    }
    case CHANGE_GITHUB_REPO_NAME: {
      newState.githubRepoName = action.payload.target.value;
      return newState;
    }
    case CHANGE_MENTOR_ID: {
      newState.mentorID = action.payload.target.value;
      return newState;
    }
    case CHANGE_PROJECT_DESC: {
      newState.projectDescription = action.payload.target.value;
      return newState;
    }
    case ON_CLICK_SIGNOUT: {
      newState.isLoggedIn = !state.isLoggedIn;
      return newState;
    }
    case ON_ADMIN_ADD_ID: {
      newState.adminAddID = action.payload.target.value;
      return newState;
    }
    case ADMIN_CREATES_ID: {
      const var1 = loginJson.filter((x) => x.userID === action.payload);
      console.log(action.payload, var1);
    }
    default:
      return newState;
  }
};

export default main_reducer;
