import React from "react";
import '../styles/global.css'
import { AnimeCard } from "../components/AnimeCard";
import { Header } from "../components/Header";

export function Home(){
  return (
    <div className="app">
    <Header />
    <AnimeCard /> 
    </div>
  )
}