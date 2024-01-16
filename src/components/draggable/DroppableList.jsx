// components/DroppableList.js
import { useDrop } from 'react-dnd';

const DroppableList = ({ chords, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'FRUIT',
    drop: (item) => onDrop(item),
  });

  return(

 
      <div ref={drop} className="flex space-x-4 h-20
       bgx-yellow-200 ">
        
           {chords.map((chord, index) => (
            <div className=' bgx-red-400' key={index}>
              <button className="btn-primary  btn " style={{width:(chord.duration * 20 )}}>
                <p>{chord.getStringChord()}</p> ({ chord.getStringKeys()})
              </button>
               
               
             
            </div>
          
        
       ))}
      </div>
 
  );
  //   <div ref={drop} className="overflow-x-auto whitespace-no-wrap p-5">
  //     <div className="flex space-x-4 bg-yellow-200">
        
  //          {chords.map((chord, index) => (
         
  //          <button className="btn-primary btn w-20">{chord}</button>
        
  //      ))}
  //     </div>

  //     <div className="mt-5 flex space-x-4 bg-yellow-200">
        
  //          {chords.map((chord, index) => (
         
  //          <button className="btn-primary btn w-20">{chord}</button>
        
  //      ))}
  //     </div>
  //   </div>
  // );


};
export default DroppableList;
