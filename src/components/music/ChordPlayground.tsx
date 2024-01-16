'use client';
import ToneMethods from '@/modules/music/ToneMethods';
// import playSynthByString from '@/modules/ToneModule';
import React from 'react';
import {MyChord, ChordType} from '@/modules/music/MyChord';
import createMidi from '@/modules/music/MidiTool';
import { useEffect } from 'react';
import { useState } from 'react';
import ToneCollection from '@/modules/music/ToneCollection';
import ChordFamilies from '@/modules/music/ChordFamilies';



  
  
function SelectOption(props:any){
    const keys = [
        "C", "D", "E", "F", "G", "A","B"
    ]

    return(
        <div>
        <select onChange={props.onChange} value={props.selected} className="select select-bordered w-full max-w-xs">
           {keys.map((key, index)=>(
            <option key={key} value={index}>
                {key}
            </option>
           ))}
        </select>
        </div>
    )
}



function ChordTuts(props:any){
    const onTutsClick = ()=>{
        // ToneMethods.playSynthByString(props.keyCode);
        props.chord.play()
        // createMidi()
    }
    return(
        <div>
            <div onClick={onTutsClick} className=" box-border text-center border h-40 white-tuts">
                <p className='select-none' style={{marginTop:120}}>{props.chord.name}</p>
            </div>
        </div>
    )
}


function ChordRow(props:any){
    return(
        <div className='grid-cols-7 col-span-1 grid gap-2'>
            <ChordTuts chord = {props.chordKeys[0]}/>
            <ChordTuts chord = {props.chordKeys[1]}/>
            <ChordTuts chord = {props.chordKeys[2]}/>
            <ChordTuts chord = {props.chordKeys[3]}/>
            <ChordTuts chord = {props.chordKeys[4]}/>
            <ChordTuts chord = {props.chordKeys[5]}/>
            <ChordTuts chord = {props.chordKeys[6]}/>
    </div>
    )
}


export default function ChordPlayGround(){
    // const [pressedKey, setPressedKey] = useState(null);
    const [selectedKey, setSelectedKey] = useState(0)
    const c:string = "C"
    const chordKeys = ChordFamilies[selectedKey];

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {

        setSelectedKey(parseInt(e.target.value));
    };

    useEffect(() => {
      const handleKeyPress = (event:any) => {
        const key = event.key;
  
        // Check if the pressed key is a number between 1 and 7
        if (/^[1-7]$/.test(key)) {
        //   setPressedKey(key);
          chordKeys[(parseInt(key) - 1)].play()
        }
      };
  
      // Add event listener for key presses
      window.addEventListener('keydown', handleKeyPress);
  
      // Cleanup the event listener when the component unmounts
      return () => {
        window.removeEventListener('keydown', handleKeyPress);
      };
    }, []);
    return (
        <div className='relative'>
            <div className=''>
                <div className='w-full items-center justify-start flex my-3'>
                <p className='pr-4'>Key : </p>
                <SelectOption onChange={handleChange} selected={selectedKey} />
                </div>
                
                <ChordRow chordKeys={chordKeys}/>
            </div>
        </div>
       
        
    )
}