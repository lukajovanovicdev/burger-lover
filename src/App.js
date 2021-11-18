import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import AddIngredients from "./components/AddIngredients";
import Burgers from "./components/Burgers";
import AddBurger from "./components/AddBurger";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/burger-lover/Ingredients" element={<Ingredients />} />
        <Route
          path="/burger-lover/AddIngredients"
          element={<AddIngredients />}
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
