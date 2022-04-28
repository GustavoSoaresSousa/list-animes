import React, {useState, useEffect, createContext} from "react";
import { api } from '../services/api'
export const AnimeContext = createContext('');

export function AnimeContextProvider({children}){
  const [anime, setAnime] = useState('');
  const [loading, setLoading] = useState(true);
  const [animeInfo, setAnimeInfo] = useState({});
  useEffect(() => {
    fetch(`${api}/anime?filter[text]=${anime}`).then(res => res.json()).then(data => setAnimeInfo(data))
  }, [anime]);

  return (
    <AnimeContext.Provider value={{setAnime, animeInfo}}>
      {children}
    </AnimeContext.Provider>
  )
}