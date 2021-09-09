import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import HomeIcon from "@material-ui/icons/Home";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

export default function TaskItem({ task, i }) {
  const [isChecked, setIsChecked] = useState(false);
  const [deleteItem,setDeleteItem]=useState(true)

  

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

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div onClick={handleCheck}>
        {deleteItem ? 

        <li key={i}>
        <ThemeProvider theme={theme}>
          <HomeIcon />{" "}
          <p style={isChecked ? { color: "green" } : { color: "black" }}>
            {task}{" "}
          </p>{" "}
          <DeleteIcon  onClick={()=>setDeleteItem(false)} />
        </ThemeProvider>
      </li> : 
      null }
      
    </div>
  );
}
