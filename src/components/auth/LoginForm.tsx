// components/LoginForm.js
import React from 'react';
import ThemeChanger from '../ThemeChanger';

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-10 card-bordered border-primary-content card">
        <h2 className="mb-8 text-3xl font-semibold">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered input-primary-content w-full max-w-xs"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered input-primary-content w-full max-w-xs"
            />
          </div>
          <button
            type="submit"
            className="w-full  btn btn-primary mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
