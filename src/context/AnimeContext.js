import React, {useState, useEffect, createContext} from "react";
import { api } from '../services/api'
export const AnimeContext = createContext('');

export function AnimeContextProvider({children}){
  const [anime, setAnime] = useState('');
  const [animesDefault, setAnimesDefault] = useState({});
  const [animeAndId, setAnimeAndId ] = useState({});
  console.log(animeAndId)
  const [animeInfo, setAnimeInfo] = useState({});

  useEffect(() => {
    if(anime === ''){
    fetch(`${api}/trending/anime`).then(res => res.json()).then(data => setAnimeInfo(data))
    }
    fetch(`${api}/anime?filter[text]=${anime}`).then(res => res.json()).then(data => setAnimeInfo(data))
  }, [anime]);

  return (
    <AnimeContext.Provider value={{setAnime, animeInfo, animesDefault, setAnimeAndId, animeAndId}}>
      {children}
    </AnimeContext.Provider>
  )
}