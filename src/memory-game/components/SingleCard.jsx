import "./SingleCard.css";

export default function SingleCard({ card, handleChoice, flipped, disable }) {
  function handleClick() {
    if (!disable) {
      handleChoice(card);
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="" className="front" />
        <img
          src="/img/cover.png"
          alt=""
          className="back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
