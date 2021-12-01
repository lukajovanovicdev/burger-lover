import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Ingredients from './components/Ingredients';
import AddIngredients from './components/AddIngredients';
import Burgers from './components/Burgers';
import AddBurger from './components/AddBurger';
import MakeCustomBurger from './components/MakeCustomBurger';
import ButtonBases from './components/buttons/ButtonsBase';
import useIngrediantsFetch from './services/useIngrediantsFetch';

// TODO Generalno evo primera strukture foldera kojom se mozete voditi: https://medium.com/@kolbysisk/react-folder-structure-for-enterprise-level-applications-f8384eff162b

function App() {
  const [ingredient, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const ingData = useIngrediantsFetch();

  // TODO treba da bude izdvojeno u poseban fajl ili deo useIngredients Hook-a
  async function addIngredientHandler(ingredient) {
    const response = await fetch('https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  }

  // TODO ovaj deo sa content-om se ne koristi nigde, a i da se koristi, ne bi trebalo da postoji u App.js-u, bar ne za ingredient-e
  let content = <p>No ingredient found</p>;

  if (ingredient.length > 0) {
    content = <Ingredients ingredient={ingredient} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <div>
      <BrowserRouter>
        <ButtonBases></ButtonBases>
        <Routes>
          <Route path="/burger-lover/Ingredients" element={<Ingredients />} />
          <Route
            path="/burger-lover/AddIngredients"
            element={<AddIngredients onAddIngredient={addIngredientHandler} />}
          />
          <Route path="/burger-lover/Burgers" element={<Burgers />} />
          <Route path="/burger-lover/AddBurger" element={<AddBurger />} />
          <Route path="/burger-lover/MakeCustomBurger" element={<MakeCustomBurger />} />
          <Route path="*" element={<Navigate to="/burger-lover/AddIngredients"></Navigate>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
