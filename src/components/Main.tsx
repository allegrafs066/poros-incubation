import React, { useState } from "react";
import Card from "./Card";
import styles from "./Main.module.css";

const Main: React.FC = () => {
  const [changeCount, setChangeCount] = useState(0);

  const handleCardClick = () => {
    setChangeCount(changeCount + 1);
  };
  return (
    <main>
      <h1 className={styles.counter}>{changeCount} number changes detected</h1>
      <div className={styles.cardContainer}>
        <div className={styles.specialContainer}>
          <Card
            color="#dbfb15"
            startingValue={1}
            incrementValue={1}
            onCardClick={handleCardClick}
          />
          <Card
            color="#2bf2fe"
            startingValue={2}
            incrementValue={2}
            onCardClick={handleCardClick}
          />
        </div>

        <Card
          color="#f474ff"
          startingValue={3}
          incrementValue={3}
          onCardClick={handleCardClick}
        />
        <Card
          color="#ff8a8a"
          startingValue={4}
          incrementValue={4}
          onCardClick={handleCardClick}
        />
      </div>
    </main>
  );
};

export default Main;
