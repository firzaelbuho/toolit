"use client"
// music/page.tsx
import React from 'react';
import LoginForm from '@/components/LoginForm';
// import playSynth from '@/modules/ToneMethods';
import { useState } from 'react';
import { useEffect } from 'react';
import MusicPlay from '@/components/music/MusicPage';
import MusicTabs from '@/components/music/MusicTabs';
import createMidi from '@/modules/music/MidiTool';
import { Midi } from '@tonejs/midi'
import { useRouter } from 'next/router';
import ButtonExport from '@/components/music/ButtonExport';
import FileDropZone from '@/components/music/FileDropzone';
import ButtonPlay from '@/components/music/ButtonPlay';
import ChordBuilder from '@/components/music/ChordBuilder';


export default function Page() {

  

  return (
    <div className="items-center justify-center min-h-screen">
      <div className='container grid grid-cols-12 mt-5 text-center px-32 gap-4'>
        <div className="grid col-span-12 grid-cols-12 border p-5 gap-4">
          
  
          <div className="items-center box-border  grid col-span-12">
            <FileDropZone />
          </div>
          <div className="border items-center box-border  grid col-span-12">
            <ChordBuilder />
          </div>
          <div className="box-border grid col-span-2 text-left gap-y-3">
            <ButtonPlay />
            <h5>Export :</h5>
            <div className="grid grid-cols-2 gap-x-2">
              <ButtonExport exportType= "midi" />
              <ButtonExport exportType= "json" />
            </div>
          
          </div>
        
          

        </div>
        {/* <div className="grid col-span-4 border">4</div> */}
      </div>
      
  
      {/* <MusicPlay /> */}
    </div>
  );
};

