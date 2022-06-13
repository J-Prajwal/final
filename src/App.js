import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import { getCartItems } from "./store/cart/cart.actions";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  let from = location.state?.from?.pathname || "/";

  const isAuthenticated = useSelector(
    (state) => state.auth.data.isAuthenticated
  );
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCartItems());
      navigate(from, { replace: true });
    } else {
      navigate("/login");
    }
  }, [dispatch, isAuthenticated, from, navigate]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path=""
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
