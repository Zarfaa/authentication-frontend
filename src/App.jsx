import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import ForgotPassword from "./features/auth/ForgetPassword";
import Home from "./features/auth/welcom";
import ConfirmEmail from "./features/auth/confirmEmail";
import ResetPassword from "./features/auth/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="/confirm" element={<ConfirmEmail />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
