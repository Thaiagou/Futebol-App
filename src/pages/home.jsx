import { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [times, setTimes] = useState([]);

  const getTimes = () => {
    axios
      .get("https://api-futebol.vercel.app/times")
      .then((response) => setTimes(response.data));
  };

  useEffect(() => {
    getTimes();
  }, []);

  return (
    <div style={{ margin: "10px" }}>
      <span>
        <h2>Tabela Brasileirão</h2>
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
          <h7>Clube</h7>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <h7>Pts</h7>
            <h7>Pjs</h7>
            <h7>VIT</h7>
            <h7>DER</h7>
            <h7>EMP</h7>
          </div>
        </div>
        <div>
          <div>
            {" "}
            {times.map((time) => (
              <div>
                <div className="divTimes">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <h4
                      style={{
                        color:
                          time.posicao <= 4
                            ? "green"
                            : time.posicao >= 17
                            ? "red"
                            : time.posicao <= 6 && time.posicao >= 5
                            ? "orange"
                            : time.posicao >= 7 && time.posicao <= 12
                            ? "rgb(0, 23, 155)"
                            : time.posicao >= 13 && time.posicao <= 20
                            ? "black"
                            : "inherit",
                      }}
                    >
                      {time.posicao}
                    </h4>

                    <img className="escudo" src={time.escudo} />

                    <span>
                      <h4>{time.nome}</h4>
                    </span>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "15px",
                      padding: "5px",
                      alignItems: "center",
                    }}
                  >
                    <h4 style={{ width: "25px" }}>{time.pontos}</h4>
                    <h4 style={{ width: "25px" }}>{time.partidas_jogadas}</h4>
                    <h4 style={{ width: "25px" }}>{time.vitorias}</h4>
                    <h4 style={{ width: "25px" }}>{time.derrotas}</h4>
                    <h4 style={{ width: "20px" }}>{time.empates}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Link to={`/partidas`}>
        <h4>Partidas →</h4>
      </Link>
    </div>
  );
}
