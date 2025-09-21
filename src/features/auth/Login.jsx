import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { login } from "../../services/auth.services";
import logo from '../../assets/Analytics_Audtor_logo.png'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await login({ email: username, password });
      if (res.data?.statusCode === "success") {
        toast.success(res?.message || "Login successful");
        localStorage.setItem("token", res.data?.data?.token);
        navigate("/home");
      } else {
        toast.error(res?.message || "Login failed. Try again.");
      }
    } catch (err) {
      const errorMessage =
        err.response?.message || "Login failed. Try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-ultra-light">
      <div className="card w-full max-w-md shadow-xl bg-neutral-ultra-light">
        <div className="bg-primary-light p-6 rounded-t-xl flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-primary">Welcome Back!</h2>
            <p className="text-sm text-white">Sign in to continue</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Analytics Auditor Logo" className="h-8 w-auto" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="py-10 px-8 space-y-4">
          <div className="form-control">
            <label className="block text-neutral-dark font-medium mb-1">Email</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
              className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="form-control">
            <label className="block text-neutral-dark font-medium mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between my-4">
            <label className="flex items-center cursor-pointer text-neutral-dark">
              <input type="checkbox" className="checkbox checkbox-sm mr-2" />
              <span className="label-text">Remember me</span>
            </label>
            <Link
              to="/forgot"
              className="text-sm text-primary hover:underline mt-2 mb-2"
            >
              Forgot your password?
            </Link>
          </div>

          <div className="form-control mt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 px-4 bg-primary-dark text-white font-bold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-neutral-semi-dark">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-primary font-semibold">
              Signup now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
