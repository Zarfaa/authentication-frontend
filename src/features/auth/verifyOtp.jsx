import { useState } from "react";
import { Link } from "react-router-dom";

const VerifyOtp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-ultra-light">
      <div className="card w-full max-w-md shadow-xl bg-neutral-ultra-light ">
        
        {/* Header */}
        <div className="bg-primary-light p-6 rounded-t-xl flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-primary">Welcome Back!</h2>
            <p className="text-sm text-white">Sign in to continue</p>
          </div>
        </div>

        {/* Form */}
        <form className="py-10 px-8 space-y-4">
          {/* Username */}
          <div className="form-control">
            <label className="block text-neutral-dark font-medium mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border border-neutral-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password */}
          <div className="form-control">
            <label className="block text-neutral-dark font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
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

          {/* Submit Button */}
          <div className="form-control mt-4">
            <button className="w-full py-2 px-4 bg-primary-dark text-white font-bold rounded-md hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
              Log In
            </button>
          </div>

          {/* Signup link */}
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

export default VerifyOtp;
