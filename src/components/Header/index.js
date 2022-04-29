import React from "react";
import './style.css';
import { Input } from '../Input';
import {AiOutlineHome} from 'react-icons/ai'
import {BsBookmarkCheck} from 'react-icons/bs'


export function Header(){
  return(
    <header className="header-container">
          <ul className="header-ul">
            <li><a><AiOutlineHome /></a></li>
            <li><a><BsBookmarkCheck /></a></li>
          </ul>
          <Input />
    </header>
  )
}