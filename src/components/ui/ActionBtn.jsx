import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";

const ActionBtn = ({ text, handleSubmit }) => {
  return (
    <div>
      <Button
        onClick={handleSubmit}
        fullWidth
        color="success"
        variant="contained"
      >
        {text}
      </Button>
    </div>
  );
};

ActionBtn.propTypes = {
  text: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default ActionBtn;
