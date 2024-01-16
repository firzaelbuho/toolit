'use client';
import ToneMethods from '@/modules/music/ToneMethods';
// import playSynthByString from '@/modules/ToneModule';
import React from 'react';
import { MyNote } from '@/modules/music/MyNote';

const whiteKeys = [
    'C', 'D',  'E', 'F',  'G',  'A', 'B',
   
];

// Buat array untuk kunci nada piano dari C3 hingga B5
const blackKeys: string[] = [
    'C#',  'D#',  'F#', 'G#', 'A#'
   
  ];
  
  




function WhiteTuts(props:any){
    const onTutsClick = ()=>{
        // ToneMethods.playSynthByString(props.keyCode);
        const note = new MyNote(props.keyCode, 8, props.octave )
        note.play()
    }
    return(
        <div>
            <div onClick={onTutsClick} className=" box-border text-center border h-40 white-tuts">
                <p className='select-none' style={{marginTop:120}}>{props.keyCode + props.octave}</p>
            </div>
        </div>
    )
}
function BlackTuts(props:any){
    const onTutsClick = ()=>{
        // ToneMethods.playSynthByString(props.keyCode);
        const note = new MyNote(props.keyCode, 8, props.octave )
        note.play()
    }
    return(
        <div className='px-1'>
            <div onClick={onTutsClick} className="box-border text-center border h-20 black-tuts">
                <p className='pt-10 select-none'>{props.keyCode + props.octave}</p>
            </div>
        </div>
    )
}

function WhiteRow(props:any){
    return(
        <div className='grid-cols-7 col-span-4 grid gap-1'>
            <WhiteTuts keyCode = {whiteKeys[0]} octave = {props.octave} />
            <WhiteTuts keyCode = {whiteKeys[1]} octave = {props.octave} />
            <WhiteTuts keyCode = {whiteKeys[2]} octave = {props.octave} />
            <WhiteTuts keyCode = {whiteKeys[3]} octave = {props.octave} />
            <WhiteTuts keyCode = {whiteKeys[4]} octave = {props.octave} />
            <WhiteTuts keyCode = {whiteKeys[5]} octave = {props.octave} />
            <WhiteTuts keyCode = {whiteKeys[6]} octave = {props.octave} />
            
    </div>
    )
}
function BlackRow(props:any){
    return(
        <div className='grid-cols-4 col-span-4 grid gap-1 '>
                
            <div className='grid-cols-7 col-span-2 grid gap-1'>  
                <div className='col-span-1'></div>
                <div className='col-span-2'><BlackTuts keyCode = {blackKeys[0]} octave = {props.octave}/></div>
                <div className='col-span-2'><BlackTuts keyCode = {blackKeys[1]} octave = {props.octave}/></div>
            </div>
            <div className='grid-cols-7 col-span-2 grid gap-1'>  
                <div className='col-span-2'><BlackTuts keyCode = {blackKeys[2]} octave = {props.octave}/></div>
                <div className='col-span-2'><BlackTuts keyCode = {blackKeys[3]} octave = {props.octave}/></div>
                <div className='col-span-2'><BlackTuts keyCode = {blackKeys[4]} octave = {props.octave}/></div>
           
            </div>
        
            
        </div>
    
    
    )
}

export default function PianoPlayGround(){
    return (
        <div className='relative'>
            <div className='grid-cols-12 grid gap-1'>
            
            <WhiteRow octave={3} />
            <WhiteRow octave={4} />
            <WhiteRow octave={5} />
            
                
            </div>
            <div className='absolute top-0 left-0 w-full'>
                <div className='grid grid-cols-12 w-full' >
                <BlackRow octave={3}/>
                <BlackRow octave={4}/>
                <BlackRow octave={5}/>
               
                </div>
              
            </div>
           
        </div>
       
        
    )
}