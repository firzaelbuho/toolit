import { Midi } from '@tonejs/midi'
import MidiPlayer from 'midi-player-js';
import { useState } from 'react';
import fs from 'fs';
import * as Tone from 'tone';
// import * as fs from 'fs';

const playJson = async () => {
    
    try {
        const response = await fetch('/midi/journey.json');
        const data = await response.json() as MyMidi;
        console.log(data)
        const synths = [];
        const now = Tone.now() + 1;
        data.tracks.forEach((track) => {
            //create a synth for each track
            const synth = new Tone.PolySynth(Tone.Synth, {
                envelope: {
                    attack: 0.02,
                    decay: 0.1,
                    sustain: 0.3,
                    release: 1,
                },
            }).toDestination();
            synths.push(synth);
            //schedule all of the events
            track.notes.forEach((note) => {
                synth.triggerAttackRelease(
                    note.name,
                    note.duration,
                    note.time + now,
                    note.velocity
                );
            });
        });

        // data.tracks.forEach(track => {
        //     let time = 0
        //     const notes = track.notes;
        //     notes.forEach(note=>{
        //         const synth = new Tone.Synth().toDestination();
        //         synth.triggerAttackRelease(note.name, note.duration, time);
        //         time += note.duration
        //    })
        // });
    } catch (error) {
        console.error('Error fetching JSON file:', error);
            return null;
        }
}

const  playMidi  = () => {
    
}

const parseJson = async () => {
    
    try {
        const response = await fetch('/midi/output.json');
        const data = await response.json();
            return data
        } catch (error) {
        console.error('Error fetching JSON file:', error);
            return null;
        }
    };


const exportMidi : (type:string)=>string | Buffer = (type)=>{
    // create a new midi file
    var midi = new Midi()
    // add a track
    const track = midi.addTrack()
    track.addNote({
    midi : 60,
    time : 0,
    duration: 0.2
    })
    .addNote({
    name : 'C5',
    time : 0.3,
    duration: 0.1
    })
    .addCC({
    number : 64,
    value : 127,
    time : 0.2
    })
    const buffer = Buffer.from(midi.toArray());

    if(type === "midi"){
        // return "midi";
        return buffer;
    } else if (type === "json") {
        return JSON.stringify(midi, null, 2);
    } else{
        return "null"
    }

}

const MidiTool = {
    exportMidi : exportMidi,
    playMidi : playMidi,
    parseJson : parseJson,
    playJson : playJson
}

export default MidiTool

