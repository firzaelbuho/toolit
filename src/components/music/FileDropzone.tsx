import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function FileDropZone(){
    const onDrop = useCallback((acceptedFiles:any) => {
        // Handle the dropped files here (e.g., upload to server, process, etc.)
        console.log('Accepted files:', acceptedFiles);
      }, []);
    
      const { getRootProps, getInputProps } = useDropzone({ onDrop });
    
      return (
        <div {...getRootProps()} className="px-4 py-10 border-2 border-dashed rounded-lg">
          <input {...getInputProps()} />
          <h1 className="">+</h1>
          <p className="">Drag and Drop your midi files here</p>
          
        </div>
      );
}