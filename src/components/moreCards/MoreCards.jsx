import "./moreCards.css";

export default function MoreCards({ setCardLimit, cardLimit }) {
  return (
    <div className={cardLimit <= 3 ? "more-cards-noBtn" : "more-cards"}>
      {cardLimit > 3 && (
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
