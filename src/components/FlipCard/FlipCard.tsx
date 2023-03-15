import "./FlipCard.css";

interface FlipCardProps {
  word: string;
  handleClick: React.MouseEventHandler<HTMLDivElement>;
}

const FlipCard = (props: FlipCardProps): JSX.Element => {
  return (
    <div className="card" onClick={props.handleClick}>
      <div className="card-face">
        <div className="front">FRONT</div>
        <div className="back">{props.word}</div>
      </div>
    </div>
  );
};

export default FlipCard;
