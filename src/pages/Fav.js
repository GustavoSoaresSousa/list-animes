import React from "react";
import '../styles/global.css';
import '../components/AnimeCard/style.css';
import { useNavigate } from 'react-router-dom';
import { Header } from "../components/Header";
import { useAnime} from '../Hook/useAnime';
import {MdOutlineRemoveCircleOutline} from 'react-icons/md'


export function Fav(){
  const { setAnimeAndId, animeAndId } = useAnime();
  const navigate = useNavigate();
  function handlePage() {
    if(!animeAndId) return;
     navigate('/anime-infos')
  }
  return (
    <div>
      <Header />
      
    {localStorage.hasOwnProperty("animesFav") && (
        <div className="container-anime-card">
        {JSON.parse(localStorage.getItem("animesFav")).map(anime => (
          <div className="content-anime-card" key={anime.id}>
            <div onClick={() => setAnimeAndId({id: anime.id.id, title: anime.id.title, description: anime.id.description , cover: anime.id.poster  })} className="icons">
                  <div className="icon-content">
                  <img  onClick={handlePage} src={anime.id.img} />                 
                  </div>
                  <h4 className="title-anime-card">{anime.id.title}</h4>
            </div>
          </div>
        ))}
        </div>
      )
    }
    <h2>Não há fav</h2>
    </div>
  )
}