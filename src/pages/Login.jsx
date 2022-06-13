import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/auth/auth.actions";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const handleOnChange = (e) => {
    const { name, value } = e.traget;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginCreds.email && loginCreds.password) {
      dispatch(login(loginCreds));
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>Error...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          data-cy="login-email"
          placeholder="Enter your email"
          name="email"
          type="email"
          value={loginCreds.email}
          onChange={handleOnChange}
        />
        <input
          data-cy="login-password"
          placeholder="Enter password"
          name="password"
          type="password"
          value={loginCreds.password}
          onChange={handleOnChange}
        />
        <button data-cy="login-submit" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
