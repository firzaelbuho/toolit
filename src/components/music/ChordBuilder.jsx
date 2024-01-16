import { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableItem from "../draggable/DraggableItem";
import DroppableList from  "../draggable/DroppableList";
import ChordFamilies from "@/modules/music/ChordFamilies";


const HorizontalButtonList = () => {
  return (
    <div className="overflow-x-auto whitespace-no-wrap">
      <div className="flex space-x-4">
        {/* Button 1 */}
        <button className="btn">Button 1</button>
        {/* Button 2 */}
        <button className="btn">Button 2</button>
        
      </div>
    </div>
  );
};


export default function ChordBuilder(){
    
  const [chords, setChords] = useState(ChordFamilies[0]);
  const initialChords = ChordFamilies[0]

  const handleDrop = (item) => {
    const newChords = [...chords, item.chord];
    setChords(newChords);
  };

  
  return (
    <DndProvider backend={HTML5Backend}>
    {/* <HorizontalButtonList/> */}
    <div className="grid grid-cols-12">
      {/* <h1>Drag and Drop Example</h1> */}
      <div className="grid col-span-12 grid-cols-8">
        
          <h2>Available Fruits</h2>
          {initialChords.map((chord, index) => (
            <div className="col-span-1" key={index}>
              <DraggableItem key={index} chord={chord} />
            </div>
          ))}
      </div>
          <div className="col-span-12 my-3"><h2>Tracks</h2></div>
        <div className="col-span-2">
          <div className="h-20">
            Track 1
          </div>
          <div className="h-20">
            Track 1
          </div>
          <div className="h-20">
            Track 1
          </div>
        </div>
      
        <div className="overflow-x-auto whitespace-no-wrap  col-span-10">

          <DroppableList chords={chords} onDrop={handleDrop} />
          <DroppableList chords={chords} onDrop={handleDrop} />
          <DroppableList chords={chords} onDrop={handleDrop} />
       </div> 
     
    </div>
    </DndProvider>
  );
}