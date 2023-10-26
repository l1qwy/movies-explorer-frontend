import "./moviesCard.css"
import {durationHourMinute} from "../../utils/constants"

export default function MoviesCard({ cards }) {

  return (
    <div className="moviesCard">
      <div className="moviesCard__info">
        <p className="moviesCard__info-name">{cards.nameRU}</p>
        <p className="moviesCard__info-time">{Math.round(cards.duration/durationHourMinute)}ч {cards.duration - durationHourMinute*Math.round(cards.duration/durationHourMinute)}м</p>
      </div>
      <img className="moviesCard__img" src={`https://api.nomoreparties.co/${cards.image.url}`} alt={`Постер ${cards.nameRU}`}></img>
      <button className="moviesCard__btn">Схранить</button>
    </div>
  )
}
