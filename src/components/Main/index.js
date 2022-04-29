import React from "react";
import {BsBookmarkCheck} from 'react-icons/bs';
import { useAnime } from '../../Hook/useAnime';

export function Main(){
  const { animesDefault } = useAnime();

  return (
    <>
    {animesDefault.data && (
      <div className="container-anime-card">
        {animesDefault.data.map(anime => (
          <div className="content-anime-card" key={anime.id}>
            {console.log(anime.attributes)}
            <div className="icons">
                  <div className="icon-content">
                    <i><BsBookmarkCheck /></i>
                  <img src={anime.attributes.posterImage.small} />                 
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