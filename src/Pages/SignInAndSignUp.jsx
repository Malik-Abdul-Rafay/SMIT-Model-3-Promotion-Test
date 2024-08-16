import React, { useState } from "react";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/FireBase";
import { useNavigate } from "react-router-dom";



function SignInAndSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignInActive, setIsSignInActive] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleMethadChange() {
    setIsSignInActive(!isSignInActive);
  }
  function handleButton(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter email and password!");
    } else {
      setError("");
    }
    if (!isSignInActive) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          const user = response.user;
          navigate('/private')
        })
        .catch((error) => {
          const errorMessage = error.message;
          setError(errorMessage)
      });
    }else{
      signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        navigate('/private')

      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        // ..
    });
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 m-3">
      <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border-t-4 border-indigo-500">
        {/* Promotion Test Section */}
        <div className="mb-8 p-6 bg-indigo-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-indigo-700 text-center mb-2">
            Model 3 Promotion Test
          </h3>
          <p className="text-sm text-gray-700 text-center">
            UI and Firebase Functionality Test
          </p>
          <p className="text-sm text-gray-700 text-center">
            Institute: <span className="font-semibold">SMIT</span>
          </p>
          <p className="text-sm text-gray-700 text-center">
            Student Name: <span className="font-semibold">Muhammad Abdul Rafay</span>
          </p>
        </div>

        {/* Sign In/Sign Up Section */}
        <h2 className="text-2xl font-medium text-center text-gray-800 mb-6">
          {isSignInActive ? "Sign In to Your Account" : "Create Your Account"}
        </h2>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
            Email Address:
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 text-sm mb-2">
            Password:
          </label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </div>
        {error && <p className="text-red-500 text-sm my-3">{error}</p>}
        <div className="mb-4">
          <button
            onClick={handleButton}
            type="button"
            className="w-full bg-indigo-500 text-white py-2 rounded-md font-medium hover:bg-indigo-600 transition-colors"
          >
            {isSignInActive ? "Sign In" : "Sign Up"}
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm">
          {isSignInActive ? "Don't have an account?" : "Already have an account?"}
          <span
            onClick={handleMethadChange}
            className="text-indigo-500 font-semibold cursor-pointer hover:underline ml-2"
          >
            {isSignInActive ? "Sign Up" : "Sign In"}
          </span>
        </p>
      </form>
    </div>
  );
}

export default SignInAndSignUp;
