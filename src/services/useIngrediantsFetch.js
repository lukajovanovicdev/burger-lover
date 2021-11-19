import { useCallback, useEffect, useState } from "react";


export default function useIngrediantsFetch() {

const [status, setStatus] = useState({data: null, error: null})

  const fetchIngredientHandler   = useCallback(async () => {
    // setIsLoading(true);
    try {
      const response = await fetch('https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients');
      if (!response.ok) {
        throw new Error('Something went wrong!');
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
      setStatus({data: loadedIngredients, error: null});
    } catch (error) {
      setStatus({data:null, error: error.message});
    }
    // setIsLoading(false);
  }, []);
  
  useEffect(() => {
    fetchIngredientHandler();
  }, [fetchIngredientHandler]);

  return status;

}