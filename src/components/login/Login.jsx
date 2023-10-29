import Form from "../form/Form";
import "./login.css";

export default function Login({
  title,
  textButton,
  labelEmail,
  labelPassword,
}) {
  return (
    <div className="login app__container">
      <main>
        <Form
          name="login"
          title={title}
          textButton={textButton}
          labelEmail={labelEmail}
          labelPassword={labelPassword}
        />
      </main>
    </div>
  );
}
