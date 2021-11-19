import React, { useEffect, useState } from "react";
import classes from "./CommentModal.module.css";
import "./buttons/ButtonsBase";

const CommentModal = ({ openComment, burgerData, setOpenComment }) => {
  

  useEffect(() => {
    
    console.log(openComment);
    console.log(burgerData);
  }, []);

  const saveChanges = (data) => {
    console.log(data);
  };

  return (
    openComment && (
      <div className={classes.commentbox}>
        <div>
        <label htmlFor="Comment">Comment</label>
        <input type="text" id="Comment" name={burgerData.name} />
        
        <img className={classes.burgerpic}  src='static/images/ingredients.jpg' /> 
        {burgerData.ingredients.map((ingredient) => {
            return (
                <div>{ingredient.name}</div>
            )
        })}
            
        </div>
        <button onClick={() => setOpenComment(false)}>Close</button>
        <button onClick={() => saveChanges()}>Save</button>
      </div>
    )
  );
};

export default CommentModal;
