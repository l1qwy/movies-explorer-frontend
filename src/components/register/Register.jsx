import Form from "../form/Form";
import "./register.css";

export default function Register({
  title,
  textButton,
  labelName,
  labelEmail,
  labelPassword,
}) {
  return (
    <section className="register page__container" name="register">
      <main>
        <Form
          name="register"
          title={title}
          textButton={textButton}
          labelName={labelName}
          labelEmail={labelEmail}
          labelPassword={labelPassword}
        />
      </main>
    </section>
  );
}
