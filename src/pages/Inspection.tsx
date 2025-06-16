import React from "react";
import { useMediaQuery } from "usehooks-ts";
import Header from "../components/Header.tsx";
import Inspectioncard from "../components/InspectionCard.tsx";
import Expand from "../components/Expand.tsx";
import Titlenoticeboard from "../components/TitleNoticeBoard.tsx";
import Inspectioncardinspection from "../components/InspectionCardInspection.tsx";
import Inspectioncardmaintenance from "../components/InspectionCardMaintenance.tsx";
import styles from "../styles/Inspection.module.css";

function Inspection() {
  const isBigDevice = useMediaQuery("(min-width: 768px)");
  return (
    
    <>
    <Header />
    <div className={styles["inspection-page"]}>
      
      <div className={styles["inspection-wrapper"]}>
        <Titlenoticeboard title={"Inspeções"} />
        <Expand
          maxHeight={isBigDevice ? 500 : 300}
          children={
            <div className={styles["inspection-inspections-wrapper"]}>
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardinspection
                    dateMessage={"20/10/2023"}
                    reasonMessage={"Inspeção de rotina."}
                  />
                }
              />

            </div>
          }
        />
        <Titlenoticeboard title={"Manutenção preventiva"} />
        <Expand
          maxHeight={isBigDevice ? 500 : 300}
          children={
            <div className={styles["inspection-maintenance-wrapper"]}>
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardmaintenance
                    reasonMessage={"Manutenção preventiva."}
                    actionMessage={"Agendar uma manuntação."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardmaintenance
                    reasonMessage={"Manutenção preventiva."}
                    actionMessage={"Agendar uma manutenção."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardmaintenance
                    reasonMessage={"Manutenção preventiva."}
                    actionMessage={"Agendar uma manutenção."}
                  />
                }
              />
              <Inspectioncard
                train={"849"}
                route={"Marília/Maritlha"}
                child={
                  <Inspectioncardmaintenance
                    reasonMessage={"Manutenção preventiva."}
                    actionMessage={"Agendar uma manutenção."}
                  />
                }
              />
            </div>
          }
        />
      </div>
    </div>
  </>);
  
}

export default Inspection;