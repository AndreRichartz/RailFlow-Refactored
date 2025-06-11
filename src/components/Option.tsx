import React from "react";
import styles from "../styles/Options.module.css";

type OptionsProps = {
  option1: string;
  option2: string;
  activeOption: string;
  setActiveOption: (option: string) => void;
};

function Options({ option1, option2, activeOption, setActiveOption }: OptionsProps) {
  function handleOption(option: string) {
    setActiveOption(option);
    console.log("Option clicked:", option);
  }

  return (
    <div className={styles["options"]}>
      <button
        onClick={() => handleOption(option1)}
        className={`${styles["option"]} ${activeOption === option1 ? styles["active"] : ""}`}
      >
        {option1}
      </button>
      <button
        onClick={() => handleOption(option2)}
        className={`${styles["option"]} ${activeOption === option2 ? styles["active"] : ""}`}
      >
        {option2}
      </button>
    </div>
  );
}

export default Options;