import Form from "../form/Form";
import "./login.css";

export default function Login({
  title,
  textButton,
  labelEmail,
  labelPassword,
  onLogin,
  isSuccessfully,
  setIsSuccessfully,
  isSending,
  setIsSending
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
          onLogin={onLogin}
          isSuccessfully={isSuccessfully}
          setIsSuccessfully={setIsSuccessfully}
          isSending={isSending}
          setIsSending={setIsSending}
        />
      </main>
    </div>
  );
}
