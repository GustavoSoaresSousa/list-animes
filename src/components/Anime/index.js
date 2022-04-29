import React from "react";
import { useAnime } from '../../Hook/useAnime';
import { Header } from '../Header';
import './style.css';

export function Anime(){
  const { animeAndId } = useAnime();

  return (
    <>
    <Header />
      {
        <div className="anime-container">
        <div className="anime-content">
          <img src={animeAndId.cover} />
          <div className="infos">
            <h2 className="title-anime">{animeAndId.title}</h2>
            <div className="description">{animeAndId.description}</div>
            <button className="add-fav">Add favorites</button>
          </div>
        </div>
      </div>}
    </>
  )
}
