import * as Tone from 'tone';
import ToneCollection from './ToneCollection';

const findNoteIndex = (note:string)=> {
    const index = ToneCollection.notes.indexOf(note);
    return index;
}


// Memainkan sebuah nada tengah 'C' untuk durasi 8th note
const ToneMethods = {
    playSynth : function playSynth(
        note: string = "C", 
        duration: number = 8, 
        octave:number = 4
    ): void {
        const notes:string = note + octave.toString();
        const quantize:string = duration.toString() + "n";
        const synth = new Tone.Synth().toDestination();
        // synth.set({ polyphony: 4 }); // Atur batasan polifoni
        synth.triggerAttackRelease(notes, quantize);
        // alert("test");
    },

    playSynthByString : function(
        note: string = "C4", 
    ): void {
        const notes:string = note;
        const quantize:string = "8n";
        const synth = new Tone.Synth().toDestination();
        synth.triggerAttackRelease(notes, quantize);
        // alert("test");
    },

    findNoteIndex : findNoteIndex 
    
}



export default ToneMethods
