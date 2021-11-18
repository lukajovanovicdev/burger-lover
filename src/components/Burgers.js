import React from "react";
import BurgerList from "./BurgerList"
import ButtonBases from "./buttons/ButtonsBase";

const Burger = () => {

    return (
        <div class="middle">
            <ButtonBases></ButtonBases>
            <BurgerList />
        </div>
       );
}

export default Burger;
