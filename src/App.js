import React from "react";
import CardList from "./CardList";
import {characters} from './characters.js'
import './App.css'

export default function App() {


  return (
    <div>
      <h1>Characters</h1>
      <CardList characters={characters} />
    </div>
  );
}