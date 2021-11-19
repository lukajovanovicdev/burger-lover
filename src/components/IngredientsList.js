import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
import useIngrediantsFetch from "../services/useIngrediantsFetch";

export default function CheckboxList({ checked, setChecked }) {
  const ingredients = useIngrediantsFetch();
  const ingredientsData = ingredients.data;

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const openBurgerIngredientList = (burgerId) => {
    console.log("burgerId = ", burgerId);
  };
  const style = {
    width: "30%",
    backgroundColor: "#bf9341",
    maxHeight: "100%",
    padding: "10px",
    position: "relative",
    left: "65%",
    bottom: "-35px",
    borderRadius: "10px",
    fontSize: "25px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <List style={style}>
      {ingredientsData &&
        ingredientsData.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              // secondaryAction={
              //   <IconButton edge="end" aria-label="comments" >
              //     <CommentIcon />
              //   </IconButton>
              // }
              disablePadding
              // onClick={openBurgerIngredientList(value.id)}
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={checked.indexOf(value.id) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value.name}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
}
