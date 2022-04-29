import React from "react";
import { useAnime } from '../../Hook/useAnime';
import { Header } from '../Header'

export function Anime(){
  const { animeAndId } = useAnime();
  return (
    <>
    <Header />
      {
        <div className="anime-container">
        <div className="anime-content">
          <h1 className="title-anime">title</h1>
          <img />
          <div className="description">description</div>
            <div className="info">info</div>
        </div>
      </div>}
    </>
  )
}
// {animeInfo.data && (
//   <div className="container-anime-card">
//     {animeInfo.data.map(anime => (
//       <div className="content-anime-card" key={anime.id}>
//         <div onClick={() => setAnimeAndId({id: anime.id})} className="icons">
//               <div className="icon-content">
//                 <i><BsBookmarkCheck /></i>
//               <img onClick={handlePage} src={anime.attributes.posterImage.small}/>                 
//               </div>
//               <h4 className="title-anime-card">{anime.attributes.canonicalTitle}</h4>
//         </div>
//       </div>
//     ))}
//   </div>
// )}