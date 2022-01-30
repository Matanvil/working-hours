import { useState } from "react";
import loginUser from "../utils/login";
import "../style/login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    loginUser({
      username: username,
      password: password
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={onSubmitHandler}>
        <h1>Work hours tracking system</h1>
        <h3>a system for inputing and viewing working hours</h3>
        <input
          type="text"
          placeholder="Username..."
          onChange={changeUsernameHandler}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={changePasswordHandler}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
