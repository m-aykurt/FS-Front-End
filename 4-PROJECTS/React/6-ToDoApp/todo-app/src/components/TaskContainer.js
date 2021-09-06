import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from "@material-ui/icons/Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75vw",
    },
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
  },

  typography: {
    h2: {
      fontSize: 18,
      padding: 2,
    },
  },
});

function TaskContainer() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleTask = (e) => {
    const input = document.querySelector("#outlined-basic");
    setTasks([...tasks, input.value]);
    e.preventDefault();
  };

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };
  console.log(tasks);

  return (
    <div>
      <h2>Create Task</h2>
      <div>
        <form className={classes.root} noValidate autoComplete="off">
          <div>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <Button
              onClick={handleTask}
              variant="contained"
              color="primary"
              endIcon={<AddIcon />}
            />
          </div>
        </form>
        <div className="table">
          <h3>Table</h3>
          {tasks.map((task, i) => (
            <ul key={i}>
              <ThemeProvider theme={theme}>
                <li>
                  <HomeIcon onClick={handleCheck} />{" "}
                  <p
                    style={isChecked ? { color: "green" } : { color: "black" }}
                  >
                    {task}{" "}
                  </p>{" "}
                  <DeleteIcon />
                </li>
              </ThemeProvider>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
