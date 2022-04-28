import React, {useState} from "react";
import './style.css';
import { useAnime } from '../../Hook/useAnime';

export function Input() {
  const { setAnime } = useAnime()
  return (
    <div className="input-container">
        <input className="input-content " type="text"
          placeholder="Search your anime here"
          onChange={(e) => setAnime(e.target.value)}
        />
    </div>
  )
}