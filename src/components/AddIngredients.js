import { useState } from "react";

const AddIngredients = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredTag, setenteredTag] = useState("");
  const [enteredTagTouched, setenteredTagTouched] = useState(false);

  const [enteredCalories, setEnteredCalories] = useState("");
  const [enteredCaloriesTouched, setEnteredCaloriesTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredCaloriesIsValid = enteredCalories !== "";
  const caloriesInputIsInvalid = enteredCalories === "";

  const enteredTagIsValid = enteredTag;

  let formIsValid = false;

  if (enteredNameIsValid && enteredTagIsValid && enteredCaloriesIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const tagInputChangeHandler = (event) => {
    setenteredTag(event.target.value);
  };
  const caloriesInputChangeHandler = (event) => {
    setEnteredCalories(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const tagInputBlurHandler = (event) => {
    setenteredTagTouched(true);
  };
  const caloriesInputBlurHandler = (event) => {
    setEnteredCaloriesTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    // USING REFS
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)
    setEnteredName("");
    setEnteredNameTouched(false);
    setenteredTag("");
    setenteredTagTouched(false);
    setEnteredCalories("");
    setEnteredCaloriesTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="text">Ingredient Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="ingredientName"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
          name="ingredientName"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div>
        <label htmlFor="text">Tag</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="ingredientTag"
          onChange={tagInputChangeHandler}
          onBlur={tagInputBlurHandler}
          value={enteredTag}
          name="ingredientTag"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter a valid Tag</p>
        )}
      </div>
      <div>
        <label htmlFor="text">Ingredient Calories</label>
        <input
          // ref={nameInputRef}
          type="number"
          id="ingredientName"
          onChange={caloriesInputChangeHandler}
          onBlur={caloriesInputBlurHandler}
          value={enteredCalories}
          name="ingredientCalories"
        />
        {caloriesInputIsInvalid && <p className="error-text"></p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default AddIngredients;
