import { useLocation } from "react-router-dom";
import "./moreCards.css";

export default function MoreCards({ onLoadMore, movies, cardLimit }) {
  const { pathname } = useLocation();
  return (
    pathname === '/saved-movies' ?
    <div className="more-cards_no_btn"></div>
    :
    <div className="more-cards">
      {movies.length > cardLimit &&
        <button className="more-cards__btn" onClick={onLoadMore}>Еще</button>
        }
    </div>
  );
}
