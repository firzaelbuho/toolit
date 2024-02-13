import useSWR from 'swr';
import { useState, useEffect } from 'react';
import { Wallpaper } from '@/utils/types/Wallpaper';
import fetchWallpapers from '@/utils/api/wallpaper';



  

const ApiTest: React.FC = () => {
  const { data: wallpapers, error } = useSWR<Wallpaper[]>('wallpapers', fetchWallpapers);

  if (error) return <div>Error fetching data.</div>;
  if (!wallpapers) return <div>Loading... <span className="loading loading-spinner loading-xs"></span></div>;

  return (
    <div>
      <h1>Wallpapers</h1>
      <ul>
        {wallpapers.map((wallpaper) => (
          <li key={wallpaper.id}>
            {wallpaper.title} - <a href={wallpaper.url}>View</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiTest;