import { useCallback, useEffect, useState } from 'react';

/* TODO Bolji nacin kako napisati i optimizovati hook
  https://dev.to/ms_yogii/useaxios-a-simple-custom-hook-for-calling-apis-using-axios-2dkj */

  /* TODO Los pravopis u nazivu, moze da izazove konflikte i greske jer ce ga neko pozivati onako kako se pravilno pise */
export default function useIngrediantsFetch() {
  const [status, setStatus] = useState({ data: null, error: null });

  const fetchIngredientHandler = useCallback(async () => {
    // setIsLoading(true);
    try {
      const response = await fetch('https://6195607a74c1bd00176c6d1f.mockapi.io/ingredients');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      // TODO Zasto je ovo potrebno? Zar response vec ne vraca isti set podataka u istom formatu?
      const loadedIngredients = [];

      for (const key in data) {
        loadedIngredients.push({
          id: key,
          name: data[key].name,
          tag: data[key].tag,
          calories: data[key].calories,
        });
      }
      setStatus({ data: loadedIngredients, error: null });
    } catch (error) {
      setStatus({ data: null, error: error.message });
    }
    // setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchIngredientHandler();
    // TODO Ovo poziva fetch najmanje 2 puta, nema potrebe za fetchIngredientHandler-om u dependency nizu
  }, [fetchIngredientHandler]);

  return status;
}
