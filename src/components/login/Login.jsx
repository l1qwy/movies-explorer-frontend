import Form from "../form/Form";
import "./login.css";

export default function Login({
  title,
  textButton,
  labelEmail,
  labelPassword,
}) {
  return (
    <section className="login page__container" name="login">
      <main>
        <Form
          name="login"
          title={title}
          textButton={textButton}
          labelEmail={labelEmail}
          labelPassword={labelPassword}
        />
      </main>
    </section>
  );
}
