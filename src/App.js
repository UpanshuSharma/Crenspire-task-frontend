import "./App.css";
import NavBar from "./Components/navbar/NavBar";
import Register from "./Components/register/Register";
import Main from "./page/Main";
import Login from "./Components/login/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.UserAuthReducer.user);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={user ? <Main /> : <Navigate to="/login" />} />
        <Route
          path="/main"
          element={user ? <Main /> : <Navigate to="../login" />}
        />

        <Route
          path="/registration"
          element={user ? <Navigate to="/main" /> : <Register />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/main" /> : <Login />}
        />
      </Routes>
    </div>
  );
}

export default App;
