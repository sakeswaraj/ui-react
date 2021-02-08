import "../index.css";

import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { DataGrid } from "@material-ui/data-grid";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import { tableData } from "../utils/tabledata";

export default function GithubAdmin() {
  const [repo, setRepo] = useState("");
  return (
    <StyledDiv>
      <div className='github-admin-datagrid'>
        <Table bordered hover>
          <thead>
            <tr>
              <th>
                <input type='checkbox' />
              </th>
              <th>ID</th>
              <th>Associate</th>
              <th>Mentor</th>
              <th>Repository</th>
              <th>Epic</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((x) => (
              <tr key={x.id}>
                <td>
                  <input type='checkbox' className='input-check' />
                </td>
                <td>{x.id}</td>
                <td>{x.associate}</td>
                <td>{x.mentor}</td>
                <td>
                  <input
                    type='text'
                    value={x.repository}
                    onChange={(e) => setRepo(e.target.value)}
                  />
                </td>
                <td>{x.epic}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className='github-admin-buttons'>
        <Button variant='contained' color='secondary'>
          Decline Requests
        </Button>
        <Button variant='contained' color='primary'>
          Grant Access & Create Repository
        </Button>
      </div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .github-admin-datagrid {
    height: 350px;
    width: 80%;
    margin: 10px auto;
  }
  .github-admin-buttons {
    display: flex;
    width: 40%;
    justify-content: space-between;
    margin-top: 20px;
  }
  input {
    display: inline-block;
    width: 100%;
    text-align: center;
    height: 30px;
    border: none;
  }
  td {
    padding: 20px;
  }
`;
