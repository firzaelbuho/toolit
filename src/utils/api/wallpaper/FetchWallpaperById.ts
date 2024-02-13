import axios from "axios";
import { Wallpaper } from "../../types/Wallpaper";

const fetchWallpaperById = async (wallpaperId:string): Promise<Wallpaper | ErrorResponse | null> => {
    try {
      const response = await axios.get('http://localhost:4000/api/'+wallpaperId);
      if(response.data.success){
        return response.data.data;
      } else{
        return response.data
      }
     
    } catch (error) {
      console.error('Error fetching wallpapers:', error);
      return null;
    }
  };
  
  export default fetchWallpaperById;