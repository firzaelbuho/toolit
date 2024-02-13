// music/page.tsx
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
// import playSynth from '@/modules/ToneMethods';
import { useState } from 'react';
import { useEffect } from 'react';
import MusicPlay from '@/components/music/MusicPage';
import MusicTabs from '@/components/music/MusicTabs';


export default function Page() {


  return (
    <div className="items-center justify-center min-h-screen">
      <div className='container grid grid-cols-12 mt-5 text-center px-32 gap-4'>
        <div className="grid col-span-12 grid-cols-12 border p-5 gap-4">
          
  
          <div className="items-center box-border border  grid col-span-12 p-3 ">
            {/* tabs instrumen sections */}
           <MusicTabs />
          </div>
          <div className="box-border border h-60 grid col-span-2"></div>
          <div className="box-border border h-60 grid col-span-3"></div>
         
          

        </div>
        {/* <div className="grid col-span-4 border">4</div> */}
      </div>
      
  
      {/* <MusicPlay /> */}
    </div>
  );
};

