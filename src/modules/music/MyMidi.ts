

interface Note {
    duration: number;
    durationTicks: number;
    midi: number;
    name: string;
    ticks: number;
    time: number;
    velocity: number;
  }
  
  interface ControlChange {
    number: number;
    ticks: number;
    time: number;
    value: number;
  }
  
  interface Instrument {
    family: string;
    number: number;
    name: string;
  }
  
  interface Track {
    channel: number;
    controlChanges: {
      [key: number]: ControlChange[];
    };
    pitchBends: any[]; // Tambahkan tipe yang sesuai jika dibutuhkan
    instrument: Instrument;
    name: string;
    notes: Note[];
  }
  
  interface Header {
    keySignatures: any[]; // Tambahkan tipe yang sesuai jika dibutuhkan
    meta: any[]; // Tambahkan tipe yang sesuai jika dibutuhkan
    name: string;
    ppq: number;
    tempos: any[]; // Tambahkan tipe yang sesuai jika dibutuhkan
    timeSignatures: any[]; // Tambahkan tipe yang sesuai jika dibutuhkan
  }
  
  interface MyMidi {
    header: Header;
    tracks: Track[];
    duration: number;
  }
  
  // Contoh penggunaan
//   const midiJson = /* JSON yang diberikan */;
  
//   const midiInstance: MidiClass = midiJson as MidiClass;
  
//   console.log(midiInstance);
  