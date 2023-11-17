import React from "react";
import PropTypes from "prop-types";

const FormWrapper = ({ headingText, children, directionText }) => {
  return (
    <form className="shadow max-w-lg text-center w-full space-y-6 p-4">
      <h1 className="font-bold text-3xl">{headingText}</h1>
      {children}
      {directionText}
    </form>
  );
};

FormWrapper.propTypes = {
  headingText: PropTypes.string,
  children: PropTypes.array,
  directionText: PropTypes.object,
};
export default FormWrapper;
