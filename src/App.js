import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Ingredients from "./components/Ingredients";
import AddIngredients from "./components/AddIngredients";
import Burgers from "./components/Burgers";
import AddBurger from "./components/AddBurger";

function App() {
  const [ingredient, setIngredient] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIngredientHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
  });
  try {
    const response = await fetch("https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients");
  }

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
    <BrowserRouter>
      <Routes>
        <Route path="/burger-lover/Ingredients" element={<Ingredients />} />
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
