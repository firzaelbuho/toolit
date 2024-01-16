'use client';

import MidiTool from "@/modules/music/MidiTool";
import MidiPlayer from 'midi-player-js';
import { useState } from "react";
import React from 'react';
import { Track } from "@tonejs/midi";

export default function ButtonPlay(props:any){
    const [jsonData, setJsonData] = useState<any>(null);
       
    const onPlayButton = ()=> {
        
        MidiTool.playJson()

      }

    return (
        <a onClick = {onPlayButton} className='btn btn-primary'> Play </a>
    )
}