import React, { useState } from 'react';
import Header from '../components/Header.tsx';
import Options from '../components/Option.tsx';
import Alerts from '../components/Alert.tsx';
import Status from '../components/Status.tsx';
import styles from "../styles/home.module.css";

function Home() {
  const option1 = "Alerts";
  const option2 = "Status";
  const [activeOption, setActiveOption] = useState(option1);

  return (
   <>
    <span className='header'><Header /></span>
       <div className={styles["home-page"]}>
      <img
        src="src/assets/img/10801642-vista-aerea-limpa-do-mapa-da-cidade-noturna-com-rua-e-rio-001-vetor.jpg"
        alt=""
        style={{ height: "500px", width: "100%" }}
      />
      <Options
        option1={option1}
        option2={option2}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />

      {activeOption === "Alerts" && (
        <div className={styles["alerts-container"]}>
          <Alerts
            reason={"Chuva intensa"}
            route={"Amélia/Bromélia"}
            train={"Trem 2486"}
          />
          <Alerts
            reason={"Chuva intensa"}
            route={"Amélia/Bromélia"}
            train={"Trem 2486"}
          />
          <Alerts
            reason={"Chuva intensa"}
            route={"Amélia/Bromélia"}
            train={"Trem 2486"}
          />
          <Alerts
            reason={"Chuva intensa"}
            route={"Amélia/Bromélia"}
            train={"Trem 2486"}
          />
          <Alerts
            reason={"Chuva intensa"}
            route={"Amélia/Bromélia"}
            train={"Trem 2486"}
          />
        </div>
      )}

      {activeOption === "Status" && (
        <div className={styles["status-container"]}>
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
          <Status
            train={"950"}
            route={"Amélia/Bromélia"}
            line={"7001"}
            order={"895:Carvão"}
            arriveTime={"2 dias 2h30"}
            movementStatus={"Parado"}
          />
        </div>
      )}
    </div>

    </>
  );
}

export default Home;