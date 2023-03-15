import "./CardGrid.css";
import FlipCard from "components/FlipCard/FlipCard";

const COUNT = 16;

const CardGrid = (): JSX.Element => {
  function handleClick() {}

  const cards = [];
  for (let i = 0; i < COUNT; i += 1) {
    cards.push(<FlipCard word={`${i}`} handleClick={handleClick} />);
  }

  return <div className="card-grid">{cards}</div>;
};

export default CardGrid;
