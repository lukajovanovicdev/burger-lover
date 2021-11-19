import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import CommentModal from "./CommentModal";
import ".././colors";
import "./BurgerLIst.css";

export default function CheckboxList() {
  const [openComment, setOpenComment] = React.useState(false);

  const showComment = (burgerData) => {
    console.log(burgerData);
    setOpenComment(true);
  };

  const burgers = [
    {
      id: 1,
      name: "Burger1",
      calories: 100,
      tag: "veganski",
    },
    {
      id: 2,
      name: "Burger2",
      calories: 100,
      tag: "pork",
    },
    {
      id: 3,
      name: "Burger3",
      calories: 100,
      tag: "italijanski",
    },
    {
      id: 4,
      name: "Burger4",
      calories: 100,
      tag: "veganski",
    },
  ];

  const [checked, setChecked] = React.useState([0]);

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

  return (
    <React.Fragment>
      {openComment && <CommentModal openComment={openComment} />}
      <List
        sx={{ width: "100%", maxWidth: 360, backgroundColor: " #bf9341" }}
        className="burger"
      >
        {burgers.map((value) => {
          const labelId = `checkbox-list-label-${value.id}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon onClick={() => showComment(value)} />
                </IconButton>
              }
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
    </React.Fragment>
  );
}
