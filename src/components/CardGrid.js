import React from "react";
import Card from './Card';  
import planetsData from "../utils/planetsData";

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {planetsData.map((planet, index) => (
        <Card
          key={index}
          modelPath={planet.modelPath}
          planetName={planet.planetName}
          description={planet.description}
        />
      ))}
    </div>
  );
};

export default CardGrid;
