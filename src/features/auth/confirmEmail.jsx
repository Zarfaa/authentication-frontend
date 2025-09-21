import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import logo from "../../assets/Analytics_Audtor_logo.png";

const ConfirmEmail = () => {
  const [message, setMessage] = useState("Verifying your email...");
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  const token = query.get("token");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setMessage("Invalid confirmation link.");
        return;
      }

      try {
        await axios.get(`${import.meta.env.VITE_API_BASE}/confirm`, {
          params: { token },
        });
        setMessage("Email verified! You can login now.");
      } catch (err) {
        console.error(err);
        const msg = err.response?.message || "Verification failed.";
        setMessage(msg);
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card w-full max-w-md shadow-2xl bg-white p-8 text-center rounded-2xl">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Analytics Auditor Logo" className="h-12 mb-3" />
        </div>
        <p
          className={`mb-8 text-lg`}
        >
          {message}
        </p>
        {message.includes("verified") && (
          <Link
            to="/"
            className="py-2 px-6 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-dark transition-colors"
          >
            Go to Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default ConfirmEmail;
