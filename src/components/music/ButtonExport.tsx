'use client';

import MidiTool from "@/modules/music/MidiTool";
import MidiPlayer from 'midi-player-js';
import { useState } from "react";
import React from 'react';
import { Track } from "@tonejs/midi";

export default function ButtonExport(props:any){
    const [jsonData, setJsonData] = useState<any>(null);
       
    const onDownload = ()=> {
        // alert("diklik")

       
       
        let extension = "json"
        let content = MidiTool.exportMidi(props.exportType)
        let outputType = 'application/json'
        if(props.exportType === "midi"){
            outputType = 'audio/midi'
            extension = "mid"
        }

        // const midi = MidiTool.parseJson().then((result) => {
        //     // console.log(result);
        //     setJsonData(result) // Hasilnya akan "Hello, world!"
        //     MidiTool.playJson(result)
        //     // console.log(jsonData)
           
        // });
     

        

        

        const blob = new Blob([content], { type: outputType });
    
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = `output.${extension}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      

        // const blobUrl = window.URL.createObjectURL(blob);

        // const player = new MidiPlayer.Player();
        // player.loadFile(blobUrl);
    
        // // Set up any additional configuration or event listeners if needed
    
        // // Start playing the MIDI file
        // player.play();


      }

    return (
        <a onClick = {onDownload} className='btn btn-primary'> {props.exportType} </a>
    )
}