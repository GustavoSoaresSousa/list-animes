import React from "react";
import '../styles/global.css'
import { AnimeCard } from "../components/AnimeCard";
import { Header } from "../components/Header";
import { Main } from "../components/Main";
  import { useAnime } from '../Hook/useAnime';

export function Home(){
  const { animeInfo } = useAnime();

  return (
    <div className="app">
    <Header />
    {animeInfo === '' ? ''  : <Main />  }
    {animeInfo ? <AnimeCard /> : ''}
    </div>
  )
}