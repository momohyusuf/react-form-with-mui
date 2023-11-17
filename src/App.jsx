import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("sign up");

  const handleDisplay = () => {
    if (display === "sign up") {
      setDisplay("log in");
    } else {
      setDisplay("sign up");
    }
  };

  return (
    <section className="flex justify-center items-center h-screen">
      {display === "sign up" ? (
        <SignUp handleDisplay={handleDisplay} />
      ) : (
        <Login handleDisplay={handleDisplay} />
      )}
    </section>
  );
}
