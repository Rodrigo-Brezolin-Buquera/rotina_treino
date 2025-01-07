import { useState } from "react";
import routines from "./routines";

const App = () => {
  const today = new Date().getDay();
  const [weekday, setWeekday] = useState(today);
  const [view, setView] = useState("gym");
  const routine = routines[weekday];

  const asanas = routine.asanas.map((asana) => {
    return <p key={asana}> {asana}</p>;
  });

  const TrainingSection = () => {
    return (
      <section onClick={()=> setView("asanas")} >
        <h1>{routine.day}</h1>
        <h2>Cardio:</h2>
        <p>{routine.cardio}</p>
        <h2>Treino:</h2>
        <p>{routine.routine}</p>
        <h2>Adiconal:</h2>
        <p>{routine.extra}</p>
      </section>
    );
  };

  const AsanasSection = () => {
    return (
      <section onClick={()=> setView("gym")}>
        <h2>Asanas:</h2>
        {asanas}
      </section>
    );
  };

  const ViewSelector = () => {
    switch (view) {
      case "gym":
        return <TrainingSection />;
      case "asanas":
        return <AsanasSection />;
      default:
        return <TrainingSection />;
    }
  };

  return (
    <main>
      <ViewSelector />
    </main>
  );
};

export default App;
