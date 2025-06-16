import  { useState } from 'react';
import { useMediaQuery } from "usehooks-ts";
import Header from '../components/Header.tsx';
import Options from '../components/Option.tsx';
import Alerts from '../components/Alert.tsx';
import Status from '../components/Status.tsx';
import styles from "../styles/home.module.css";
import Expand from '../components/Expand.tsx';

function Home() {
   const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const option1 = "Alerts";
  const option2 = "Status";
  const [activeOption, setActiveOption] = useState(option1);

  return (
   <>
    <span className='header'><Header /></span>
    
       <div className={styles["home-page"]}>
      <iframe
  src="https://www.google.com/maps?q=Joinville&z=12&output=embed"
  width="100%"
  height="500"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
      
      <Options
        option1={option1}
        option2={option2}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />

      {activeOption === "Alerts" && (
  isSmallDevice ? (
    <div className={styles["alerts-container"]}>
      <Expand
        maxHeight={500}
        children={
          <>
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
          </>
        }
      />
    </div>
  ) : (
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
  )
)}

      {activeOption === "Status" && (
  isSmallDevice ? (
    <div className={styles["status-container"]}>
      <Expand
        maxHeight={500}
        children={
          <>
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
          </>
        }
      />
    </div>
  ) : (
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
  )
)}
    </div>

    </>
  );
}

export default Home;