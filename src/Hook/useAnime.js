import { useContext } from "react"; 
import {AnimeContext} from '../context/AnimeContext';

export function useAnime(){
  const value = useContext(AnimeContext);
  return value
}

