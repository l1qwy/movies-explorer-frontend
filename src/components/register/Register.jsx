import Form from "../form/Form";
import "./register.css";

export default function Register({
  title,
  textButton,
  labelName,
  labelEmail,
  labelPassword,
  onRegister,
  isSuccessfully,
  setIsSuccessfully,
  isSending,
  setIsSending
}) {
  return (
    <div className="register app__container">
      <main>
        <Form
          name="register"
          title={title}
          textButton={textButton}
          labelName={labelName}
          labelEmail={labelEmail}
          labelPassword={labelPassword}
          onRegister={onRegister}
          isSuccessfully={isSuccessfully}
          setIsSuccessfully={setIsSuccessfully}
          isSending={isSending}
          setIsSending={setIsSending}
        />
      </main>
    </div>
  );
}
