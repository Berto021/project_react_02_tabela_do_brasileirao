import React from "react";
import { useState, useEffect } from "react";

const url = "https://json-test-pearl.vercel.app/times";
const DataTeam = () => {
  var [dataTeam, setDataTeam] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);

      const data = await response.json();

      setDataTeam(data);
    }
    fetchData();
  }, []);
  dataTeam.sort(function (a, b) {
    if (a.pontos < b.pontos) return 1;
    if (a.pontos > b.pontos) return -1;
    if (a.pontos === b.pontos) {
      if (a.vitorias < b.vitorias) return 1;
      if (a.vitorias > b.vitorias) return -1;
      if (a.vitorias === b.vitorias) {
        if (a.sg < b.sg) return 1;
        if (a.sg > b.sg) return -1;
        if (a.sg === b.sg) {
          {
            if (a.gm < b.gm) return 1;
            if (a.gm > b.gm) return -1;

            return 0;
          }
        }

        return 0;
      }
    }

    return 0;
  });

  return (
    <div>
      
      <table border="1">
        <tr className='principal'>
          <th>CLUBE</th>
          <th>PTS</th>
          <th>PJ</th>
          <th>VIT</th>
          <th>E</th>
          <th>DER</th>
          <th>GM</th>
          <th>GC</th>
          <th>SG</th>
        </tr>
        {dataTeam.map((times, index) => (
          <tr className='dados_aplicados'>
            <th> {index+1}° {times.nome}</th>
            <th>{times.pontos}</th>
            <th>{times.partidas}</th>
            <th>{times.vitorias}</th>
            <th>{times.empates}</th>
            <th>{times.derrotas}</th>
            <th>{times.gm}</th>
            <th>{times.gc}</th>
            <th>{times.sg}</th>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default DataTeam;
