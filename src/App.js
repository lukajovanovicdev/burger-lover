import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import AddIngredients from "./components/AddIngredients";
import Burgers from "./components/Burgers";
import AddBurger from "./components/AddBurger";
import MakeCustomBurger from "./components/MakeCustomBurger";
import ButtonBases from "./components/buttons/ButtonsBase";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIngredientHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();

      const loadedIngredients = [];

      for (const key in data) {
        loadedIngredients.push({
          id: key,
          name: data[key].name,
          tag: data[key].tag,
          calories: data[key].calories,
        });
      }
      setIngredients(loadedIngredients);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchIngredientHandler();
  }, [fetchIngredientHandler]);

  async function addIngredientHandler(ingredient) {
    const response = await fetch(
      "https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  }
  return (
    <BrowserRouter>
      <ButtonBases></ButtonBases>
      <Routes>
        <Route
          path="/burger-lover/Ingredients"
          element={<Ingredients data={ingredients} />}
        />
        <Route
          path="/burger-lover/AddIngredients"
          element={<AddIngredients onAddIngredient={addIngredientHandler} />}
        />
        <Route path="/burger-lover/Burgers" element={<Burgers />} />
        <Route path="/burger-lover/AddBurger" element={<AddBurger />} />
        <Route
          path="*"
          element={<Navigate to="/burger-lover/AddIngredients"></Navigate>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
