import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

 const email = localStorage.getItem("resetEmail");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email not found. Please restart the password reset flow.");
      return;
    }
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_BASE}/forget-password/reset`, {
        email,
        newPassword,
      });
      toast.success(res.data.message || "Password reset successfully");
      localStorage.removeItem("resetEmail");
      setTimeout(() => navigate("/"), 1500); 
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-ultra-light">
      <Toaster position="top-right" />
      <div className="card w-full max-w-md shadow-xl bg-neutral-ultra-light ">
       <div className="bg-primary-light p-6 rounded-t-xl flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary">Reset Password</h2>
            <p className="text-sm text-white">Set your new password</p>
          </div>
        </div>

        <form className="py-10 px-8 space-y-4" onSubmit={handleResetPassword}>
                    <div className="form-control">
            <label className="block text-neutral-dark font-medium mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-neutral-semi-dark"
                onClick={() => setShowPassword(!showPassword)}
              >
                👁
              </button>
            </div>
          </div>

          <div className="form-control">
            <label className="block text-neutral-dark font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center py-2 px-4 bg-primary-dark text-white font-bold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            >
              {loading && (
                <svg
                  className="animate-spin mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              )}
              Reset Password
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-neutral-semi-dark">
            Remembered your password?{" "}
            <Link to="/" className="text-primary font-semibold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
