// components/LoginForm.js
import React from 'react';
import ThemeChanger from '../ThemeChanger';

const RegisterForm = () => {
  return (
    <div className="">
      <div className="w-full p-10 card-bordered border-primary-content card ">
        <h2 className="mb-8 text-2xl font-semibold">Register</h2>
        <form>
        <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm ">
             Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input input-bordered input-primary-content w-full  "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="input input-bordered input-primary-content w-full "
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm ">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="input input-bordered input-primary-content w-full "
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm ">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="input input-bordered input-primary-content w-full"
            />
          </div>
          <div className='mb-4'>
          <label htmlFor="password" className="block mb-2 text-sm ">
              Password Confirmation
            </label>
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              className="input input-bordered input-primary-content w-full"
            />
          </div>
          </div>
          
        
          <button type="submit" className="w-full  btn btn-primary mt-2">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
