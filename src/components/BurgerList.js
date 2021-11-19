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
import useBurgersFetch from "../services/useBurgersFetch";

export default function CheckboxList() {
  const [openComment, setOpenComment] = React.useState(false);
  const [burgerData, setBurgerData] = React.useState();

  const showComment = (burgerData) => {
    console.log(burgerData);
    setOpenComment(true);
    setBurgerData(burgerData);
  };
  const burgerDataFetched = useBurgersFetch();

  const burgers = burgerDataFetched.data;
  // const burgers = [
  //   {
  //     id: 1,
  //     name: "Burger1",
  //     calories: 100,
  //     tag: "veganski",
  //     ingredients: [
  //       {
  //         name: "Bacon",
  //         image:
  //           "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg",
  //         calories: 102,
  //         tags: ["pork"],
  //         id: "1",
  //       },
  //       {
  //         name: "Tomato",
  //         image:
  //           "https://s3.amazonaws.com/img.mynetdiary.com/SystemPictures/web/11529.jpg?1553628",
  //         calories: 18,
  //         tags: ["vegetable"],
  //         id: "2",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Burger2",
  //     calories: 100,
  //     tag: "pork",
  //     ingredients: [
  //       {
  //         name: "f",
  //         image: "image 3",
  //         calories: "1",
  //         tags: "tg",
  //         id: "3",
  //       },
  //       {
  //         name: "nesto",
  //         image: "image 4",
  //         calories: "1",
  //         tags: "git",
  //         id: "4",
  //       },
  //       {
  //         name: "fjhkjh",
  //         image: "image 5",
  //         calories: "44",
  //         tags: "dyty",
  //         id: "5",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Burger3",
  //     calories: 100,
  //     tag: "italijanski",
  //     ingredients: [
  //       {
  //         name: "add",
  //         image: "image 6",
  //         calories: "12",
  //         tags: "ing",
  //         id: "6",
  //       },
  //       {
  //         name: "luk",
  //         image: "image 7",
  //         calories: "12",
  //         tags: "veg",
  //         id: "7",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Burger4",
  //     calories: 100,
  //     tag: "veganski",
  //     ingredients: [
  //       {
  //         name: "Luk",
  //         image: "image 8",
  //         calories: "12",
  //         tags: "Veg",
  //         id: "8",
  //       },
  //       {
  //         name: "kukuruz",
  //         image: "image 9",
  //         calories: "35",
  //         tags: "vegan",
  //         id: "9",
  //       },
  //     ],
  //   },
  // ];

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
      {openComment && (
        <CommentModal
          openComment={openComment}
          burgerData={burgerData}
          setOpenComment={setOpenComment}
        />
      )}
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {burgerDataFetched.data &&
          burgers.map((value) => {
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
