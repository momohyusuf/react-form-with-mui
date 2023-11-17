import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import PropTypes from "prop-types";

const SignUp = ({ handleDisplay }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  // handle user Input
  function handleUserInput(event) {
    const { name, value } = event.target;
    setUserInfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  // submit User Input

  function handleSubmit(params) {
    console.log(userInfo);
  }

  return (
    <FormWrapper
      headingText={"Create Your Account"}
      directionText={
        <p>
          Already Have an account? <span onClick={handleDisplay}>Log In</span>
        </p>
      }
    >
      <div className="flex gap-4">
        <InputField
          name={"firstName"}
          value={userInfo.firstName}
          handleInput={handleUserInput}
          label={"First name"}
        />
        <InputField
          name={"lastName"}
          handleInput={handleUserInput}
          label={"Last name"}
        />
      </div>
      <InputField handleInput={handleUserInput} label={"Phone Number"} />
      <InputField handleInput={handleUserInput} label={"Email"} />
      <InputField handleInput={handleUserInput} label={"Password"} />
      <ActionBtn handleSubmit={handleSubmit} text={"Sign up"} />
    </FormWrapper>
  );
};

SignUp.propTypes = {
  handleDisplay: PropTypes.func,
};
export default SignUp;
