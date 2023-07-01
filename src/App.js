import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./component/pages/home/Home.js";
import Signin from "./component/pages/signup-signin/Signin.js";
import Signup from "./component/pages/signup-signin/Signup.js";
import Dashboard from "./component/pages/Dashboard/Dashboard";
import { PrivateRoute } from "./component/Private-route/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
