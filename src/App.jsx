import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import Signup from "./features/auth/Signup";
import ForgotPassword from "./features/auth/ForgetPassword";
import Home from "./features/auth/welcom";
import VerifyOtp from "./features/auth/verifyOtp";
import ConfirmEmail from "./features/auth/confirmEmail";
import ConfirmPassword from "./features/auth/resetPassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<VerifyOtp />} />
        <Route path="/home" element={<Home />} />
         <Route path="/confirm" element={<ConfirmEmail />} />
           <Route path="/resetpassword" element={<ConfirmPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

