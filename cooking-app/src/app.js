import styles from "./app.module.css";
import data from "./data.json";
import React, { useState } from "react";

export const App = () => {
  const [steps, setSteps] = useState(data);
  const [activeIndex, setActiveIndex] = useState(0);
  const isFirstStep = activeIndex === 0;
  const isLastStep = activeIndex === steps.length - 1;

  // Можно задать 2 состояния — steps и activeIndex
  const clickBack = () => {
    if (!isFirstStep) {
      setActiveIndex(activeIndex - 1);
    }
  };
  const clickForward = () => {
    if (!isLastStep) {
      setActiveIndex(activeIndex + 1);
    }
  };
  const startTheOver = () => {
    setActiveIndex(0);
  };
  const theStep = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles["steps-content"]}>
            {steps[activeIndex].content}
          </div>
          <ul className={styles["steps-list"]}>
            {steps.map((step, index) => (
              <li
                key={step.id}
                className={`${styles["steps-item"]} ${
                  index < activeIndex ? styles.done : ""
                } ${index === activeIndex ? styles.active : ""}`}
              >
                <button
                  className={styles["steps-item-button"]}
                  onClick={() => theStep(index)}
                >
                  {index + 1}
                </button>
                {step.title}
              </li>
            ))}
          </ul>
          <div className={styles["buttons-container"]}>
            <button className={styles.button} onClick={clickBack}>
              Назад
            </button>
            <button
              className={styles.button}
              onClick={isLastStep ? startTheOver : clickForward}
            >
              {isLastStep ? "Начать сначала" : "Далее"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
