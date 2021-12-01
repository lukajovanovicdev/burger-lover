import React, { useState } from "react";
import Input from "@mui/material/Input";
import useIngrediantsFetch from "../services/useIngrediantsFetch";
import useBurgersFetch from "../services/useBurgersFetch";
import IngredientsList from "./IngredientsList";
import "./mcb.css";

const ariaLabel = { "aria-label": "description" };

const MakeCustomBurger = () => {
  const [checked, setChecked] = React.useState([]);

  const [customBurgerName, setCustomBurgerName] = useState("");

  async function addBurgersHandler(burger) {
    const response = await fetch(
      "https://6195607a74c1bd00176c6d1f.mockapi.io/burgers",
      {
        method: "POST",
        body: JSON.stringify(burger),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }

  const ingData = useIngrediantsFetch();

  const burgerData = useBurgersFetch();

  const customBurgerNameIsValid = customBurgerName.trim() !== "";

/* TODO Ovde treba koristiti state i update-ovati ga u customBurgerNameHandler,
  a i customBurgerNameIsValid vec vraca boolean koji moze da se iskoristi za validaciju, ako je to jedina provera,
  nema potrebe dupli posao da se radi */
  let formIsValid = false;

  const renderListOfIngreedients = () => {
    //ovde mozda staviti da ako je uneo ime custom hamburgera i kliknuo submit onda izrenderuje listu ingreedienta
    return (
      <div className="middle">
        {ingData.data && ingData.data.map((e) => <li>{e.name}</li>)}
        <IngredientsList />
      </div>
    );
  };
  const style = {
    position: "relative",
    left: "65%",
  };

  if (customBurgerNameIsValid) {
    formIsValid = true;
  }

  const customBurgerNameHandler = (event) => {
    setCustomBurgerName(event.target.value);
  };

  const getSelectedIngredients = (allIng, selectedArr) => {
    const ingredients = [];
    selectedArr.forEach((e) => {
      const ing = allIng.find((ing) => ing.id === e);
      if (ing) ingredients[ing.id] = ing;
    });

    return ingredients;
  };
  // TODO takodje exportovati u poseban fajl
  const ingredientsMockUp = [
    {
      name: "Bacon",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg",
      calories: 102,
      tags: ["pork"],
      id: "1",
    },
    {
      name: "Tomato",
      image:
        "https://s3.amazonaws.com/img.mynetdiary.com/SystemPictures/web/11529.jpg?1553628",
      calories: 18,
      tags: ["vegetable"],
      id: "2",
    },
  ];
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    const burger = {
      name: customBurgerName,
      tags: ["pork"],
      ingredients: getSelectedIngredients(ingData.data, checked),
      calories: ingredientsMockUp.reduce(
        (acc, current) => acc + current.calories,
        0
      ), //calculateCaloriesFromIngredients(ingredientsMockUp),
    };

    if (!customBurgerName) {
      return;
    }
    setCustomBurgerName(burger.name);
    addBurgersHandler(burger);
  };

  const styleInput = {
    position: "relative",
    left: "20%",
  };
  console.log(checked);
  const styleLine = {
    textAlign: "center",
  };

  return (
    <div className="middle">
      <form style={style} onSubmit={formSubmissionHandler}>
        <div>
          <label style={styleLine}>Name your custom burger!</label>
          <Input
            style={styleInput}
            type="text"
            id="customBurgerName"
            onChange={customBurgerNameHandler}
            value={customBurgerName}
            name="customBurgerName"
            inputProps={ariaLabel}
          />
        </div>
        <button disabled={!formIsValid}>Submit</button>
      </form>
      <IngredientsList checked={checked} setChecked={setChecked} />
      {renderListOfIngreedients}
    </div>
  );
};

export default MakeCustomBurger;
