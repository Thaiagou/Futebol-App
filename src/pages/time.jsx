import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";

export default function Partidas() {
  const [partidas, setPartidas] = useState([]);

  const getTimes = () => {
    axios
      .get("https://api-futebol.vercel.app/times/partidas")
      .then((response) => setPartidas(response.data));
    console.log(partidas);
  };

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <span>
        <h2>Partidas</h2>
      </span>

      <div className="backgroundTimes">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: "10px",
            paddingLeft: "10px",
            justifyContent: "space-between",
          }}
        >
          <h7>Partida</h7>
        </div>
        <div>
          <div>
            {" "}
            {partidas.map((partida) => (
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginBottom:'15px'
                }}
              >
                <div className="placarTimes">
                  <div className="timeCasa"> 
                    <h4>{partida.nome_time_casa}</h4>
                    <img
                      src={partida.escudo_time_casa}
                      className="escudoPartida"
                    />{" "}
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h2>{partida.placar_casa}</h2>
                </div>
                <span>⨉</span>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h2>{partida.placar_visitante}</h2>
                </div>
                <div className="placarTimes">
                    <div className="timeVisitante">
                  <h4>{partida.nome_time_visitante}</h4>
                  <img
                    src={partida.escudo_time_visitante}
                    className="escudoPartida"
                  />{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
