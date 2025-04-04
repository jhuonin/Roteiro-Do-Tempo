import { useState } from "react";

const locais = [
  "Teatro Amazonas",
  "Palacete Provincial",
  "Porto de Manaus",
  "Mercado Adolpho Lisboa",
  "Palácio Rio Negro",
  "Igreja São Sebastião",
  "Centro Antigo",
  "Encontro das Águas"
];

const cartasHistoricas = {
  "Teatro Amazonas": "Inaugurado em 1896, é o principal símbolo cultural do ciclo da borracha.",
  "Palacete Provincial": "Antigo quartel da PM, hoje abriga vários museus culturais.",
  "Porto de Manaus": "Projetado pelos ingleses, é um marco da engenharia fluvial.",
  "Mercado Adolpho Lisboa": "Construído em 1882, é inspirado no mercado Les Halles de Paris.",
  "Palácio Rio Negro": "Residência de um barão da borracha, depois sede do governo.",
  "Igreja São Sebastião": "Construída em 1888, é um marco religioso neogótico.",
  "Centro Antigo": "Conjunto urbano com resquícios coloniais e belle époque.",
  "Encontro das Águas": "Fenômeno natural e paisagístico entre rios Negro e Solimões."
};

const cartasReflexivas = {
  "Teatro Amazonas": "Como ele representa a identidade cultural atual de Manaus?",
  "Palacete Provincial": "Qual a importância de transformar espaços militares em culturais?",
  "Porto de Manaus": "Como revitalizar esse local para o turismo consciente?",
  "Mercado Adolpho Lisboa": "De que forma ele contribui para o cotidiano da cidade?",
  "Palácio Rio Negro": "Como reocupar edifícios históricos sem descaracterizá-los?",
  "Igreja São Sebastião": "Qual o papel dos espaços religiosos na memória urbana?",
  "Centro Antigo": "Como preservar sem expulsar os moradores vulneráveis?",
  "Encontro das Águas": "Por que esse lugar é considerado um patrimônio paisagístico?"
};

export default function RoteiroDoTempo() {
  const [local, setLocal] = useState(null);
  const [pontos, setPontos] = useState(0);

  const visitarLocal = (lugar) => {
    setLocal(lugar);
    setPontos((prev) => prev + 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Roteiro do Tempo: Manaus Histórica</h1>
      <p style={{ textAlign: 'center' }}>Clique em um local histórico para visitar e revelar cartas.</p>

      <div className="grid grid-cols-3">
        {locais.map((lugar) => (
          <button key={lugar} onClick={() => visitarLocal(lugar)}>{lugar}</button>
        ))}
      </div>

      {local && (
        <div className="grid grid-cols-2" style={{ marginTop: '20px' }}>
          <div className="card">
            <h2>Carta Histórica</h2>
            <p>{cartasHistoricas[local]}</p>
          </div>
          <div className="card">
            <h2>Carta Reflexiva</h2>
            <p>{cartasReflexivas[local]}</p>
          </div>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <strong>Pontos de Memória:</strong> {pontos}
      </div>
    </div>
  );
}