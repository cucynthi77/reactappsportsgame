import React from 'react';
import logo from './logo.svg';
import './App.css';
import bunnylogo from "../src/assets/images/bunny.png";
import houndlogo from "../src/assets/images/hound.png";
import raccoonlogo from "../src/assets/images/raccoon.png";
import squirrellogo from "../src/assets/images/squirrel.png";
import Game from "./components/game/Game";


function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: raccoonlogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: squirrellogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: bunnylogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: houndlogo
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}


export default App
