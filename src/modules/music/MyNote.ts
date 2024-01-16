// File: Chord.js
import * as Tone from 'tone';
import ToneMethods from './ToneMethods';
import ToneCollection from './ToneCollection';
import { Midi } from '@tonejs/midi'



export class MyNote {
    key: string ; 
    duration: number;
    octave: number ; 
    name:string ;
  
    constructor(key: string,  duration: number = 8, octave: number=4, name:string = "") {
        this.key = key;
        this.duration = duration;
        this.octave = octave;
        this.name = key.toString() + octave.toString();

        
    }
  
    // Metode untuk memainkan chord
    play() {

        // change "8n" to 8 for real duration
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(this.name, "8n");
            
    }

    playMidi(){
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
       // Buat objek Tone.Player dengan buffer tersebut
      // const player = new Tone.Player(buffer).toDestination();
      // player.autostart = true; // Mulai pemutaran otomatis

    }

    
  
    
  }
  
  export default MyNote;
  