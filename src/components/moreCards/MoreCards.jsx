import "./moreCards.css";

export default function MoreCards({ setCardLimit, cardLimit }) {
  return (
    <div className="moreCards page__container">
      <button
        className="moreCards__btn"
        onClick={() => setCardLimit(cardLimit + 3)}
      >
        Еще
      </button>
    </div>
  );
}
