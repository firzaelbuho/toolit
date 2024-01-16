// File: Chord.js
import * as Tone from 'tone';
import ToneMethods from './ToneMethods';
import ToneCollection from './ToneCollection';


// Enum untuk tipe chord
export enum ChordType {
    MAJ = '',
    MIN = 'm',
    DIM = 'b',
    DELAY = "delay"
  }

export class MyChord {
    key: string = "C"; 
    chordType :ChordType = ChordType.MAJ;
    duration: number = 8;
    octave: number = 4;
    notesIdx: number[] = [0,0,0]; 
    name:string = ""
  
    constructor(key: string, chordType :ChordType, duration: number, octave: number) {
        this.key = key;
        this.duration = duration;
        this.octave = octave;
        this.chordType = chordType;
        this.name = key.toString() + chordType.toString();

        const note = this.key + this.octave.toString()
        const noteIdx = ToneMethods.findNoteIndex(note)
        if (this.chordType === ChordType.MAJ) {
           this.notesIdx = [noteIdx, noteIdx+4, noteIdx+7]
        } else if (this.chordType === ChordType.MIN) {
            this.notesIdx = [noteIdx, noteIdx+3, noteIdx+7]
        } else if (this.chordType === ChordType.DIM) {
            this.notesIdx = [noteIdx, noteIdx+3, noteIdx+6]
        } else {
            this.notesIdx = [50,50,50]
        }
    }
  
    // Metode untuk memainkan chord
    play() {
      const now = Tone.now();
      const synth = new Tone.PolySynth().toDestination();
      const notes = [
        ToneCollection.notes[this.notesIdx[0]], 
        ToneCollection.notes[this.notesIdx[1]], 
        ToneCollection.notes[this.notesIdx[2]]
      ];
      // Add an event listener for each note that finishes playing
      
      synth.triggerAttackRelease(notes, 0.2, now );
      synth.releaseAll();


      //   // alert(this.notesIdx)
       
      //   const synth = new Tone.PolySynth().toDestination();
      // //   const synth = new Tone.PolySynth(Tone.Synth, {
      // //     envelope: {
      // //         attack: 0.02,
      // //         decay: 0.1,
      // //         sustain: 0.3,
      // //         release: 1,
      // //     },
      // // }).toDestination();
      //   // set the attributes across all the voices using 'set'
      //   // synth.set({ detune: -1200 });
      //   // play a chord
        



      //   synth.triggerAttackRelease(
      //       ToneCollection.notes[this.notesIdx[0]],
          
      //    1, 0.5);
            
    }

    getStringKeys():string{
      const index = ToneCollection.findIndexOfChar(ToneCollection.keys, this.key);
      return "C-E-G";
    }
    getStringChord():string{
      let str = this.key;
      let type = "";

      if(this.chordType === ChordType.MAJ){
        type = "";
      }else if(this.chordType === ChordType.MIN){
        type = "m";
      }else{
        type = "b";
      }

      return str+type;
    }
  
    // Metode untuk mengubah durasi chord
    setDuration(newDuration: number) {
      this.duration = newDuration;
    }
  
    // Metode untuk menampilkan informasi chord
    displayInfo() {
      console.log(`Chord Key: ${this.key}, Duration: ${this.duration}, Octave: ${this.octave}`);
    }
  }
  
  export default MyChord;
  