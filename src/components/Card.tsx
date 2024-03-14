import React, { useState } from "react";
import styles from "./Card.module.css";

interface CardProps {
  color: string;
  startingValue: number;
  incrementValue: number;
  onCardClick: () => void;
}

const Card: React.FC<CardProps> = ({
  color,
  startingValue,
  incrementValue,
  onCardClick,
}) => {
  const [count, setCount] = useState(startingValue);

  const handleClick = () => {
    setCount(count + incrementValue);
    onCardClick();
  };

  return (
    <div
      className={styles.card}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <p>{count}</p>
    </div>
  );
};

export default Card;
