// music/page.tsx

'use client';
import React from 'react';
import LoginForm from '@/components/auth/LoginForm';
import playSynth from '@/modules/music/ToneMethods';
import { useState } from 'react';
import { useEffect } from 'react';
import Piano from './PianoPlayground';


export default function MusicPlay() {
  // const [clicked, setClicked] = useState(false);
  const handlerOnClick = ()=> {
    // playSynth("C",4,4)
  };

  // useEffect(() => {
  //   // if (clicked) {
  //   //   // Lakukan sesuatu saat tombol diklik
  //   //   setClicked(false)
     
 
      
  //   // }
  // }, []);

  return (
    <div className="">
      <Piano />
      {/* <button className='btn btn-lg glass btn-primary btn-outline' onClick={handlerOnClick}>
        <span className="loading loading-spinner"></span>
        Klik Saya
      </button> */}
    </div>
  );
};

