import React from "react";
import { useMainContext } from "../context/main_context";
import GithubAssociate from "./GithubAssociate";
import GithubAdmin from "./GithubAdmin";

const GithubAccess = () => {
  const { isAdmin } = useMainContext();

  return <>{isAdmin ? <GithubAdmin /> : <GithubAssociate />}</>;
};
export default GithubAccess;
