import { useState } from "react";

const AddIngredients = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredTag, setenteredTag] = useState("");
  const [enteredTagTouched, setenteredTagTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredTagIsValid = enteredTag;

  let formIsValid = false;

  if (enteredNameIsValid && enteredTagIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const tagInputChangeHandler = (event) => {
    setenteredTag(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const tagInputBlurHandler = (event) => {
    setenteredTagTouched(true);
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default AddIngredients;
