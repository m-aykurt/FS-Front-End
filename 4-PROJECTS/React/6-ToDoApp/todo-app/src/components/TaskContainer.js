import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TaskItem from "./TaskItem";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "75vw",
    },
  },
}));


function TaskContainer() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);


  const handleTask = (e) => {
    const input = document.querySelector("#outlined-basic");
    setTasks([...tasks, input.value]);
    e.preventDefault();
  };
  console.log(tasks)

  

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
          <TaskItem task={task} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TaskContainer;
