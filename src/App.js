import "./App.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Ingredients from "./Ingredients";
import AddIngredients from "./AddIngredients";
import Burgers from "./Burgers";
import AddBurger from "./AddBurger";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
