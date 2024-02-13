import axios from 'axios';
import { Wallpaper } from '../types/Wallpaper';

const fetchWallpapers = async (): Promise<Wallpaper[]> => {
  try {
    const response = await axios.get('http://localhost:4000/api/wallpapers');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
    return [];
  }
};

export default fetchWallpapers;

