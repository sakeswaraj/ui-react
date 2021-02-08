import React, { useContext } from "react";

import { Container } from "react-bootstrap";
import InputTextField from "./InputTextField";
import { MainContext } from "../context/main_context";
import styled from "styled-components";

const AddAsAdmin = () => {
  const { onAdminAddID, adminAddID, AdminCreatesId } = useContext(MainContext);

  return (
    <StyledDiv>
      <div>
        <label>Enter User ID to change him as Admin</label>
        <input
          type='text'
          placeholder='ex:: SM672342'
          value={adminAddID}
          onChange={(e) => {
            onAdminAddID(e);
          }}
        />

        <button
          className='btn btn-primary'
          onClick={() => AdminCreatesId(adminAddID)}>
          Add as Admin
        </button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 70vh;
  text-align: center;

  div {
    display: flex;
    font-size: 30px;
    flex-direction: column;
    justify-content: space-around;
    height: 30vh;

    input: {
      display: inline-block;
      border: 1px solid black;
      text-align: center;
    }
  }
`;

export default AddAsAdmin;
