// File: pages/wallpaper/[id].tsx
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Wallpaper } from '@/utils/types/Wallpaper';
import fetchWallpaperById from '@/utils/api/wallpaper/FetchWallpaperById';

const WallpaperDetail: React.FC = () => {
 
  const id = 1

  const { data, error } = useSWR<Wallpaper |ErrorResponse| null>(id ? `wallpaper/${id}` : null, fetchWallpaperById);

  if (error) return <div>Error fetching wallpaper.</div>;
  if (!data) return <div>Loading...</div>;

  if(data instanceof Wallpaper){

  }
  return (
   
    <div>
      <h1>{data.title}</h1>
      <img src={data.url} alt={data.title} />
    </div>
  );
};

export default WallpaperDetail;
