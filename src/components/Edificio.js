import React from "react";
import { useLocation } from "react-router-dom";
import { OutlinedInput } from "@mui/material";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

export default function Edificio() {
  const location = useLocation();
  const { selectPosition } = location.state;

  console.log(selectPosition);
  return (
    <div>
      <div>
        <p>{selectPosition.ident}</p>
      </div>
      <div>
        <p>{selectPosition.informacion.texto}</p>
      </div>
      <div >
        <List>
          {selectPosition.pisos.map((item)=> {
            return(
              <div key={item?.numero}>
                <ListItem button>
                  <ListItemText primary={item?.numero} />
                </ListItem>
                <Divider />
              </div>
            )
          })}
        </List>
      </div>
    </div>
  );
}


/**
 * <List>
          {Edificios.map((item) => {
            return (
              <div key={item?.ident}>
                <ListItem
                  button
                  onClick={() => {
                    setSelectPosition(item);
                  }}
                >
                  <ListItemText primary={item?.ident} />
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
 */