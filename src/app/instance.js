import axios from "axios";
import { checkTokenValidity } from "./util";

export const instance = axios.create({
    baseURL:"http://localhost:3001",
});

instance.interceptors.request.use(async(req) => {
    const token =localStorage.getItem("token");
    const refresh_token = localStorage.getItem("refresh_token");
    //token doesn't exist
    if(!token) return req;
    //token exists
    req.headers.Authorization =`Bearer ${token}`;
    const isExpired = checkTokenValidity();
    if( !isExpired ) return req;
    //vada gauvida
    if(refresh_token) {
        const {data} = await axios.post("http://localhost:3001/users/refresh", {
        refresh_token,
      });

      localStorage.setItem("token", data.token);
      req.headers.Authorization = `Bearer ${data.token}`;
    }
    
      return req;

})