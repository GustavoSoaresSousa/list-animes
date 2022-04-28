import React, {useState} from "react";
import { useAnime } from '../../Hook/useAnime'
import './style.css';
import {IoIosAddCircleOutline} from 'react-icons/io'
import {AiOutlineCheckCircle} from 'react-icons/ai'

export function AnimeCard(){
  const { animeInfo } = useAnime();

  return (
    <>
    {animeInfo.data && (
      <div className="container-anime-card">
        {animeInfo.data.map(anime => (
          <div className="content-anime-card" key={anime.id}>
            {console.log(anime.attributes)}
            <h3 className="title-anime-card">{anime.attributes.canonicalTitle} {anime.attributes.showType}</h3>
            <div><i><AiOutlineCheckCircle /></i><i><IoIosAddCircleOutline /></i></div>
            <img src={anime.attributes.posterImage.small}/>
            <button className="more-info">More info</button>
          </div>
        ))}
      </div>
    )}
    </>
  )
}