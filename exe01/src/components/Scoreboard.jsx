export default function Scoreboard({ turns, pairsFound, totalPairs }) {
    return (
      <div className="scoreboard">
        <div className="score-box">
          <span>Tentativas:</span>
          <strong>{turns}</strong>
        </div>
        <div className="score-box">
          <span>Progresso:</span>
          <strong>{pairsFound} / {totalPairs}</strong>
        </div>
      </div>
    );
  }
  