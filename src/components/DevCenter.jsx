import React from "react";
import { useMainContext } from "../context/main_context";

const DevCenter = () => {
  const { userName } = useMainContext();
  return (
    <div className="devcenter-main">
      <h1>welcome {userName}!!!</h1>
    </div>
  );
};

export default DevCenter;
