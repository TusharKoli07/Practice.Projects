import React, { useState } from 'react';

const Signin = () => {
  const [isSignup, setIsSignup] = useState(false); // Toggle between login and signup
  const [isOffer, setIsOffer] = useState(false); // To manage the email offers checkbox state
  const [password, setPassword] = useState(''); // Store password
  const [confirmPassword, setConfirmPassword] = useState(''); // Store confirmed password
  const [passwordMatch, setPasswordMatch] = useState(true); // Check if passwords match

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    // Check if passwords match
    setPasswordMatch(e.target.value === password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-gray-100 to-white flex items-start justify-center pt-12">
      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg"> {/* Removed margin-top */}
        {/* Page Title */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignup ? 'Sign Up' : 'Log In'}
        </h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name Field for Signup */}
          {isSignup && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter your full name"
              />
            </div>
          )}

          {/* Contact (Phone Number) Field */}
          <div className="mb-4">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
              Contact Number (Required)
            </label>
            <input
              type="tel"
              id="contact"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Email Field for Signup only */}
          {isSignup && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email (Optional)
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Enter your email address"
              />
            </div>
          )}

          {/* Offers Checkbox */}
          {isSignup && (
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="offers"
                checked={isOffer}
                onChange={() => setIsOffer(!isOffer)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="offers" className="ml-2 text-sm text-gray-700">
                I want to receive offers and updates via email
              </label>
            </div>
          )}

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>

          {/* Confirm Password Field */}
          {isSignup && (
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg"
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {!passwordMatch && (
                <p className="text-red-500 text-sm mt-2">Passwords do not match</p>
              )}
            </div>
          )}

          {/* Submit Button */}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
              disabled={isSignup && !passwordMatch} // Disable submit if passwords don't match
            >
              {isSignup ? 'Sign Up' : 'Log In'}
            </button>
          </div>
        </form>

        {/* Toggle between Login and Signup */}
        <div className="mt-4 text-center">
          <p>
            {isSignup ? 'Already have an account? ' : "Don't have an account?"}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setIsSignup(!isSignup)}
            >
              {isSignup ? 'Log In' : 'Sign Up'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
