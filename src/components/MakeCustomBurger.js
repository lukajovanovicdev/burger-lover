import  React from 'react';
import Input from '@mui/material/Input';
import useIngrediantsFetch from '../services/useIngrediantsFetch';
import IngredientsList from './IngredientsList'

const ariaLabel = { 'aria-label': 'description' };

const MakeCustomBurger = () => {

  const ingData = useIngrediantsFetch();

    let formIsValid = false;

    const renderListOfIngreedients =  () => {
        //ovde mozda staviti da ako je uneo ime custom hamburgera i kliknuo submit onda izrenderuje listu ingreedienta
        return (
            <div className="middle">
                {ingData.data && ingData.data.map(e => <li>{e.name}</li>)}
                <IngredientsList />
            </div>
          );
    } 
  return (
    <div className="middle">
        <form onSubmit={console.log('submited')}>
          <div>
            <Input defaultValue="Name your custom burger" inputProps={ariaLabel} />
          </div>
          <button disabled={!formIsValid}>Submit</button>
        </form>
        <IngredientsList />
        {renderListOfIngreedients}
    </div>
  );
};

export default MakeCustomBurger;
