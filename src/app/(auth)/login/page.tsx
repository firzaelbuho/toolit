"use client"
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import ThemeChanger from '@/components/ThemeChanger';
import ApiTest from '@/components/test/ApiTest';
import WallpaperDetail from '@/components/test/TestWallpaperDetail';

export default function Page(){
  return (
    <div>
      <div className='p-5'>
        <WallpaperDetail/>
        {/* <ApiTest/> */}
        {/* <ThemeChanger /> */}
      </div>
      
      <div className="min-h-screen flex items-center justify-center">
 
        {/* <LoginForm /> */}
    </div>
    </div>
   
  );
};

