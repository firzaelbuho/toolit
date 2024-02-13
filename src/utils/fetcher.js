import axios from "axios"
const fetcher = () => axios.get("http://localhost:4000/api/wallpapers").then((res) => res.data);
export default fetcher