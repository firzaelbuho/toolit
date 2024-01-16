// components/DraggableItem.js
import { useDrag } from 'react-dnd';
import React from 'react';
import MyChord from '@/modules/music/MyChord';

const DraggableItem = ({ chord }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'FRUIT',
    item: { chord },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div className="p-2 grid grid-cols-3" ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      <div className='col-span-3'>
      <button className="btn btn-secondary w-full">{chord.getStringChord()} ({chord.getStringKeys()})</button>
      </div>
     
      {/* <button className="btn btn-xs btn-primary">{chord}</button>
      <button className="btn btn-xs btn-primary">{chord}</button>
      <button className="btn btn-xs btn-primary">{chord}</button> */}
     

    </div>
  );
};

export default DraggableItem;