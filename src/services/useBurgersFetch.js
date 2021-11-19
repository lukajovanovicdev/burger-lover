import { useCallback, useEffect, useState } from "react";


export default function useBurgersFetch() {

const [status, setStatus] = useState({data: null, error: null})

  const fetchBurgersHandler = useCallback(async () => {
    // setIsLoading(true);
    try {
      const response = await fetch('https://6195607a74c1bd00176c6d1f.mockapi.io/burgers');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const loadedBurgers = [];

      for (const key in data) {
        loadedBurgers.push({
          id: key,
          name: data[key].name,
          tag: data[key].tag,
          ingredients: data[key].ingredients
        });
      }              
      setStatus({data: loadedBurgers, error: null});
    } catch (error) {
      setStatus({data:null, error: error.message});
    }
    // setIsLoading(false);
  }, []);
  
  useEffect(() => {
    fetchBurgersHandler();
  }, [fetchBurgersHandler]);

  return status;

}