"use client"
import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';
import ThemeChanger from '@/components/ThemeChanger';

export default function Page(){
  return (
    <div>
      <div className='p-5'>
      <ThemeChanger />
      </div>
      
      <div className="grid grid-cols-3">
        <div></div>
        <RegisterForm />
        {/* <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p> */}
        
       
       </div>
    </div>
   
  );
};

