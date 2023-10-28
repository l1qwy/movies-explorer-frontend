import "./moreCards.css";

export default function MoreCards({ setCardLimit, cardLimit }) {
  return (
    <div className="more-cards page__container">
      {cardLimit > 2 && (
        <button
          className="more-cards__btn"
          onClick={() => setCardLimit(cardLimit + 3)}
        >
          Еще
        </button>
      )}
    </div>
  );
}
