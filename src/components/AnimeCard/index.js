import React, {useState} from "react";
import { useNavigate } from 'react-router-dom'
import { useAnime } from '../../Hook/useAnime'
import './style.css';
import {BsBookmarkCheck} from 'react-icons/bs'


export function AnimeCard(){
  const { animeInfo, setAnimeAndId, animeAndId } = useAnime();
  const navigate = useNavigate();
  function handlePage() {
    if(!animeAndId) return;
    navigate('/anime-infos')
  }

  return (
    <>
    {animeInfo.data && (
      <div className="container-anime-card">
        {animeInfo.data.map(anime => (
          <div className="content-anime-card" key={anime.id}>
            <div onClick={() => setAnimeAndId({id: anime.id, anime.})} className="icons">
                  <div className="icon-content">
                    <i><BsBookmarkCheck /></i>
                  <img onClick={handlePage} src={anime.attributes.posterImage.small}/>                 
                  </div>
                  <h4 className="title-anime-card">{anime.attributes.canonicalTitle}</h4>
            </div>
          </div>
        ))}
      </div>
    )}
    </>
  )
}