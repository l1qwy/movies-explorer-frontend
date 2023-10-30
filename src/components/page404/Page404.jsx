import { Link, useNavigate } from "react-router-dom"
import "./page404.css"

export default function Page404({ status = 404, message = "Страница не найдена" }) {
  const navigate = useNavigate();
  const toBack = () => {navigate(-1)}

  return (
    <main>
      <section className="page404">
        <div>
          <h1 className="page404__title">{status}</h1>
          <h2 className="page404__message">{message}</h2>
        </div>
        <Link className="page404__link" onClick={toBack}>Назад</Link>
      </section>
    </main>
  )
}