import { Link, useNavigate } from "react-router-dom"
import "./page404.css"

export default function Page404({ status = 404, message = "Страница не найдена" }) {
  const navigate = useNavigate();
  const toBack = () => {navigate(-1)}

  return (
    <main>
      <section className="page404">
        <div>
          <h2 className="page404__title">{status}</h2>
          <h3 className="page404__message">{message}</h3>
        </div>
        <Link className="page404__link" onClick={toBack}>Назад</Link>
      </section>
    </main>
  )
}