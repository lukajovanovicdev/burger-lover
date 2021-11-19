import React, { useEffect, useState } from "react";
import classes from "./CommentModal.module.css";
import { Button } from "./buttons/Button";

const CommentModal = ({ openComment }) => {
  const [open, setOpen] = useState(openComment);

  useEffect(() => {
    console.log(open);
    console.log(openComment);
  }, []);

  return (
    open && (
      <div className={classes.commentbox}>
        <div></div>
        <button onClick={() => setOpen(false)}>Close</button>
      </div>
    )
  );
};

export default CommentModal;
