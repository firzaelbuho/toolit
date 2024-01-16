
import {MyChord, ChordType } from "./MyChord";

// type ChordFamilies = {
//     // name: string;
//     // age: number;
//     [key: string]: MyChord[]; // Index signature
//   };
// Variabel chordFamily yang berisi array dari instance MyChord
var ChordFamilies = [
    // "C": 
    [
      new MyChord("C", ChordType.MAJ, 8, 4),
      new MyChord("D", ChordType.MIN, 8, 4),
      new MyChord("E", ChordType.MIN, 8, 4),
      new MyChord("F", ChordType.MAJ, 8, 4),
      new MyChord("G", ChordType.MAJ, 8, 4),
      new MyChord("A", ChordType.MIN, 8, 4),
      new MyChord("B", ChordType.DIM, 8, 4)
    ],
    // "D": 
    [
      new MyChord("D", ChordType.MAJ, 8, 4),
      new MyChord("E", ChordType.MIN, 8, 4),
      new MyChord("F#", ChordType.MIN, 8, 4),
      new MyChord("G", ChordType.MAJ, 8, 4),
      new MyChord("A", ChordType.MAJ, 8, 4),
      new MyChord("B", ChordType.MIN, 8, 4),
      new MyChord("C", ChordType.MAJ, 8, 5)
    ],
    // "E": 
    [
      new MyChord("E", ChordType.MAJ, 8, 4),
      new MyChord("F#", ChordType.MIN, 8, 4),
      new MyChord("G#", ChordType.MIN, 8, 4),
      new MyChord("A", ChordType.MAJ, 8, 4),
      new MyChord("B", ChordType.MAJ, 8, 4),
      new MyChord("C#", ChordType.MIN, 8, 4),
      new MyChord("D", ChordType.MAJ, 8, 4)
    ],
    // "F": 
    [
      new MyChord("F", ChordType.MAJ, 8, 4),
      new MyChord("G", ChordType.MIN, 8, 4),
      new MyChord("A", ChordType.MIN, 8, 4),
      new MyChord("B", ChordType.MAJ, 8, 4),
      new MyChord("C", ChordType.MAJ, 8, 4),
      new MyChord("D", ChordType.MIN, 8, 4),
      new MyChord("E", ChordType.MAJ, 8, 4)
    ],
    // "G": 
    [
      new MyChord("G", ChordType.MAJ, 8, 4),
      new MyChord("A", ChordType.MIN, 8, 4),
      new MyChord("B", ChordType.MIN, 8, 4),
      new MyChord("C", ChordType.MAJ, 8, 4),
      new MyChord("D", ChordType.MAJ, 8, 4),
      new MyChord("E", ChordType.MIN, 8, 4),
      new MyChord("F", ChordType.MAJ, 8, 4)
    ],
    // "A": 
    [
      new MyChord("A", ChordType.MAJ, 8, 4),
      new MyChord("B", ChordType.MIN, 8, 4),
      new MyChord("C#", ChordType.MIN, 8, 4),
      new MyChord("D", ChordType.MAJ, 8, 4),
      new MyChord("E", ChordType.MAJ, 8, 4),
      new MyChord("F#", ChordType.MIN, 8, 4),
      new MyChord("G", ChordType.MAJ, 8, 4)
    ],
    // "B": 
    [
      new MyChord("B", ChordType.MAJ, 8, 4),
      new MyChord("C#", ChordType.MIN, 8, 4),
      new MyChord("D#", ChordType.MIN, 8, 4),
      new MyChord("E", ChordType.MAJ, 8, 4),
      new MyChord("F#", ChordType.MAJ, 8, 4),
      new MyChord("G#", ChordType.MIN, 8, 4),
      new MyChord("A", ChordType.MAJ, 8, 4)
    ],
    // "Cm": [
    //   new MyChord("Cm", ChordType.MIN, 8, 4),
    //   new MyChord("D", ChordType.DIM, 8, 4),
    //   new MyChord("E", ChordType.DIM, 8, 4),
    //   new MyChord("F", ChordType.MIN, 8, 4),
    //   new MyChord("G", ChordType.MIN, 8, 4),
    //   new MyChord("A", ChordType.DIM, 8, 4),
    //   new MyChord("B", ChordType.DIM, 8, 4)
    // ],
    // "Dm": [
    //   new MyChord("D", ChordType.MIN, 8, 4),
    //   new MyChord("E", ChordType.DIM, 8, 4),
    //   new MyChord("F", ChordType.MIN, 8, 4),
    //   new MyChord("G", ChordType.MIN, 8, 4),
    //   new MyChord("A", ChordType.MIN, 8, 4),
    //   new MyChord("B", ChordType.DIM, 8, 4),
    //   new MyChord("C", ChordType.MAJ, 8, 4)
    // ],
    // "Em": [
    //   new MyChord("E", ChordType.MIN, 8, 4),
    //   new MyChord("F#", ChordType.DIM, 8, 4),
    //   new MyChord("G", ChordType.MIN, 8, 4),
    //   new MyChord("A", ChordType.MIN, 8, 4),
    //   new MyChord("B", ChordType.MIN, 8, 4),
    //   new MyChord("C", ChordType.MAJ, 8, 4),
    //   new MyChord("D", ChordType.MAJ, 8, 4)
    // ],
    // "Fm": [
    //   new MyChord("F", ChordType.MIN, 8, 4),
    //   new MyChord("G", ChordType.DIM, 8, 4),
    //   new MyChord("A", ChordType.DIM, 8, 4),
    //   new MyChord("B", ChordType.DIM, 8, 4),
    //   new MyChord("C", ChordType.MIN, 8, 4),
    //   new MyChord("D", ChordType.DIM, 8, 4),
    //   new MyChord("E", ChordType.DIM, 8, 4)
    // ],
    // "Gm": [
    //   new MyChord("G", ChordType.MIN, 8, 4),
    //   new MyChord("A", ChordType.DIM, 8, 4),
    //   new MyChord("B", ChordType.DIM, 8, 4),
    //   new MyChord("C", ChordType.MIN, 8, 4),
    //   new MyChord("D", ChordType.MIN, 8, 4),
    //   new MyChord("E", ChordType.DIM, 8, 4),
    //   new MyChord("F", ChordType.MAJ, 8, 4)
    // ],
    // "Am": [
    //   new MyChord("Am", ChordType.MAJ, 8, 4),
    //   new MyChord("Bdim", ChordType.DIM, 8, 4),
    //   new MyChord("C", ChordType.MAJ, 8, 4),
    //   new MyChord("Dm", ChordType.MAJ, 8, 4),
    //   new MyChord("Em", ChordType.MIN, 8, 4),
    //   new MyChord("F", ChordType.MAJ, 8, 4),
    //   new MyChord("G", ChordType.MAJ, 8, 4)
    // ],
    // "Bm": [
    //   new MyChord("Bm", ChordType.MAJ, 8, 4),
    //   new MyChord("C#dim", ChordType.DIM, 8, 4),
    //   new MyChord("D", ChordType.MAJ, 8, 4),
    //   new MyChord("Em", ChordType.MIN, 8, 4),
    //   new MyChord("F#m", ChordType.MIN, 8, 4),
    //   new MyChord("G", ChordType.MAJ, 8, 4),
    //   new MyChord("A", ChordType.MAJ, 8, 4)
    // ]
    
];

  export default ChordFamilies;