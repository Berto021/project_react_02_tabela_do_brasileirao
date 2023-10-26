import { useState } from "react";

import DataTeam from "./components/DataTeam";

import "./App.css";
import TeamList from "./components/TeamList";

function App() {
  return (
    <div className="container">
      <DataTeam />
      <div className="container_information">
        <div className='info'>Informações</div>
        <div className="container1">
          <div className="squat1"></div>
          <div className='container_text'>Fase de grupos da Copa Libertadores</div>
        </div>
        <div className="container1">
          <div className="squat2"></div>
          <div className='container_text'>Qualificatórias da Copa Libertadores</div>
        </div>
        <div className="container1">
          <div className="squat3"></div>
          <div className='container_text'>Fase de grupos da Copa Sul-Americana</div>
        </div>
        <div className="container1">
          <div className="squat4"></div>
          <div className='container_text'>Rebaixamento</div>
        </div>
      </div>
    </div>
  );
}

export default App;
