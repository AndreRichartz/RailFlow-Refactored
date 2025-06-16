import Header from "../components/Header";
import Titlenoticeboard from "../components/TitleNoticeBoard";
import styles from "../styles/ReportAndAnalisys.module.css";
import Horizontalselection from "../components/HorizontalSelection";
import Horizontalselectioncard from "../components/HorizontalSelectionCard";
import { useState } from "react";
function ReportAndAnalisys() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardContent: string) => {
    setSelectedCard(cardContent === selectedCard ? null : cardContent);
    console.log(selectedCard)
  };

  const cardContents = [
    "8795",
    "8865",
    "8465",
    "8875",
    "8455",
    "8235",
    "8765",
    "8725",
    "8855",
    "8655",
    "2345",
    "4153",
    "9578",
    "3457",
    "0786",
    "1345",
    "8780",
    "3379",
    "1234",
    "4567",
    "7890",
    "2346",
    "5678",
  ];

  return (
    <>
      <Header />
      <div className={styles["report-wrapper"]}>
        <Titlenoticeboard title={"Relatório Geral"} />
        <div className={styles['graph-1-wrapper']}>
        <img
          src="src\assets\img\financial-graphs-and-charts-in-excel.png"
          alt=""
          className={styles["graph-1"]}
        />
        </div>
        <Titlenoticeboard title={"Análise dos Trens"} />
       <div className={styles["horizontal-selection-wrapper"]}>
       <Horizontalselection>
        {cardContents.map((content) => (
          <Horizontalselectioncard
            key={content}
            child={content}
            isSelected={selectedCard === content}
            onClick={() => handleCardClick(content)}
          />
        ))}
      </Horizontalselection>
      
      </div>
      <span className={styles['train']}><p>Trem:</p>{selectedCard}</span>
      <span className={styles['route']}><p>Rota do momento:</p>1567</span>
      {selectedCard !== null &&
      <div className={styles['graphs-wrapper']}
      >
<img
          src="src\assets\img\financial-graphs-and-charts-in-excel.png"
          alt=""
          className={styles["graphs"]}
          
        />
        <img
          src="src\assets\img\financial-graphs-and-charts-in-excel.png"
          alt=""
          className={styles["graphs"]}
        />
        <img
          src="src\assets\img\financial-graphs-and-charts-in-excel.png"
          alt=""
          className={styles["graphs"]}
        />
      </div>
}
      </div>
    </>
  );
}

export default ReportAndAnalisys;
