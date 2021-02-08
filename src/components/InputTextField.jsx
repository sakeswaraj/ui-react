import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "../index.css";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch",
    },
  },
}));
function InputTextField({ label, placeholder, type, value, onChange }) {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            margin: "20px",
            width: "105%",
          }}
        >
          <label className={classes.label}>{label}</label>
          <TextField
            className={classes.inputField}
            id="outlined-basic"
            label={placeholder}
            variant="outlined"
            type={type}
            value={value}
            size="small"
            onChange={(e) => onChange(e)}
            autoComplete={true}
            autoSave={true}
            style={{ width: 400 }}
            InputLabelProps={{ style: { fontSize: 13 } }}
          />
        </div>
      </form>
    </div>
  );
}

export default InputTextField;
