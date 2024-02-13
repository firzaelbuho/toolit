import { Wallpaper } from "@/utils/types/Wallpaper";
import axios from "axios";

export const fetchWallpapers = async (): Promise<Wallpaper[]> => {
  try {
    const response = await axios.get('http://localhost:4000/api/');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching wallpapers:', error);
    return [];
  }
};
