import React from "react";
import './style.css';
import { Input } from '../Input';

export function Header(){
  return(
    <header class="header-container">
          <ul class="header-ul">
            <li><a>Home</a></li>
            <li><a>Watched</a></li>
            <li><a>Watch later</a></li>
          </ul>
          <Input />
    </header>
  )
}