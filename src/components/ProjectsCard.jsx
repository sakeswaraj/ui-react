import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    border: "solid black 1px",
    //color: "red",
  },
  title: {
    fontSize: 13,
  },

  checkbox: {
    fontSize: 11,
  },
  form: {
    fontSize: 11,
  },
  // main: {
  //   width: "20%",
  //   height: "20%",
  // },
});

export default function ProjectsCard() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={classes.main}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title}>Jira Name</Typography>
          <Typography>
            <FormControlLabel
              className={classes.form}
              control={
                <Checkbox
                  className={classes.checkbox}
                  value="Subtasks"
                  color="primary"
                  //checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Subtasks"
            />
          </Typography>
          <Typography className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  value="Descriptio and Acceptance Criteria"
                  color="primary"
                  //checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Descriptio and Acceptance Criteria"
            />
          </Typography>
          <Typography className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  value="Design Document"
                  color="primary"
                  //checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Design Document"
            />
          </Typography>
          <Typography className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  value="PR & Jenkins Links"
                  color="primary"
                  //checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="PR & Jenkins Links"
            />
          </Typography>
          <Typography className={classes.checkbox}>
            <FormControlLabel
              control={
                <Checkbox
                  value="Jiras Closed"
                  color="primary"
                  //checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "primary checkbox" }}
                />
              }
              label="Jiras Closed"
            />
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
