import React from 'react';

interface ScoreBoardProps {
  score: { correct: number; incorrect: number };
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score }) => {
  return (
    <div className="score-board">
      <p>✅ Correct: {score.correct}</p>
      <p>❌ Incorrect: {score.incorrect}</p>
    </div>
  );
};

export default ScoreBoard;
