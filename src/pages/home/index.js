import { HomeMain } from "./styled";
import { Title } from "../../theme/components";
import { useHomeLogic } from "./useHomeLogic";
import { TrainingSection } from "./TrainingSection";
import { AsanasSection } from "./AsanasSection";

const HomePage = () => {
  const { routine, view, changeView } = useHomeLogic();

  const ViewSelector = () => {
    switch (view) {
      case "gym":
        return <TrainingSection routine={routine} changeView={changeView} />;
      case "asanas":
        return (
          <AsanasSection asanas={routine.asanas} changeView={changeView} />
        );
      default:
        return <TrainingSection routine={routine} changeView={changeView} />;
    }
  };

  return (
    <HomeMain>
      <Title>{routine.day}</Title>
      <ViewSelector />
    </HomeMain>
  );
};
export default HomePage;
