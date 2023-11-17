import React from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import PropTypes from "prop-types";

const Login = ({ handleDisplay }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit() {
    const logs = {
      email: email,
      password: password,
    };

    console.log(logs);
  }

  return (
    <FormWrapper
      headingText={"Welcome back"}
      directionText={
        <p>
          Dont't have an account yet?{" "}
          <span onClick={handleDisplay}>Sign up</span>
        </p>
      }
    >
      <InputField
        handleInput={(e) => setEmail(e.target.value)}
        label={"Email"}
      />
      <InputField
        handleInput={(e) => setPassword(e.target.value)}
        label={"Password"}
      />
      <ActionBtn handleSubmit={handleSubmit} text={"Log in"} />
    </FormWrapper>
  );
};

Login.propTypes = {
  handleDisplay: PropTypes.func,
};

export default Login;
