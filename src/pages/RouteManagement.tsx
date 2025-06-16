import  { useState } from "react";
import Header from "../components/Header.tsx";
import Options from "../components/Option.tsx";
import Horizontalselection from "../components/HorizontalSelection.tsx";
import Horizontalselectioncard from "../components/HorizontalSelectionCard.tsx";
import Situation from "../components/Situation.tsx";
import Planning from "../components/Planning.tsx";

function RouteManagement() {
  const option1 = "Situação";
  const option2 = "Planejamento";
  const [activeOption, setActiveOption] = useState(option1);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardContent: string) => {
    setSelectedCard(cardContent === selectedCard ? null : cardContent);
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
    '4153',
    '9578',
    '3457',
    '0786',
    '1345',
    '8780',
    '3379',
    '1234',
    '4567',
    '7890',
    '2346',
    '5678',
    
  ];

  return (
    <>
      <Header />
      <img
        src="src/assets/img/10801642-vista-aerea-limpa-do-mapa-da-cidade-noturna-com-rua-e-rio-001-vetor.jpg"
        alt="City map"
        style={{ display: "block", height: "456px", width: "100%" }}
      />
      <Options
        option1={option1}
        option2={option2}
        activeOption={activeOption}
        setActiveOption={setActiveOption}
      />
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
      
      {activeOption === "Situação" && (
      <Situation
      order="a-353"
        cargo={"Caixas de papelão"}
        route={"Rota 1"}
        originCompany={"Empresa A"}
        destinationCompany={"Empresa B"}
        currentLocation={"Rua Principal, 123"}
        arriveTime={"2023-10-15 14:00"}
      />
      )}

      {activeOption === "Planejamento" && (
        <Planning
        origin={'Rua Principal, 123'}
        destination={'Avenida Secundária, 456'}
        />
      )}
    </>
  );
}

export default RouteManagement;