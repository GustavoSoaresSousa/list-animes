import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useAnime } from '../../Hook/useAnime';
import './style.css';
import {BsBookmarkCheck} from 'react-icons/bs';

export function AnimeCard(){
  const { animeInfo, setAnimeAndId, animeAndId } = useAnime();
  const navigate = useNavigate();
  function handlePage() {
  if(!animeAndId) return;
   navigate('/anime-infos')
  }

  function addfav(id, title, img, description, poster){
    let animesFavs = new Array();
   if (localStorage.hasOwnProperty("animesFav")) {
    animesFavs = JSON.parse(localStorage.getItem("animesFav"));
   }
   animesFavs.push({id, title, img, description, poster});
   localStorage.setItem("animesFav", JSON.stringify(animesFavs));
  }

  return (
    <>
    {animeInfo.data && (
      <div className="container-anime-card">
        {animeInfo.data.map(anime => (
          <div className="content-anime-card" key={anime.id}>
            <div onClick={() => setAnimeAndId({id: anime.id, title: anime.attributes.canonicalTitle, description: anime.attributes.description , img: anime.attributes.posterImage.large, cover:anime.attributes.coverImage.large })} className="icons">
                  <div className="icon-content">
                    <i onClick={() => addfav({id: anime.id, title: anime.attributes.canonicalTitle, img: anime.attributes.posterImage.small, description: anime.attributes.description , poster: anime.attributes.coverImage.large })}><BsBookmarkCheck /></i>
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