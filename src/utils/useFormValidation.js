import { useCallback, useState } from "react";

export default function useFormValidation() {
  const [inputValue, setInputValue] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [isInputValid, setIsInputValid] = useState({});

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const validationMessage = event.target.validationMessage;
    const valid = event.target.validity.valid;
    const form = event.target.form;

    setInputValue((oldInputs) => {
      return { ...oldInputs, [name]: value };
    });

    setErrorMessage((message) => {
      return { ...message, [name]: validationMessage };
    });

    setIsInputValid((isValid) => {
      return { ...isValid, [name]: valid };
    });

    setIsValid(form.checkValidity());
  }

  const setValue = useCallback((name, inputValue) => {
    setInputValue((oldInputValue) => {
      return { ...oldInputValue, [name]: inputValue };
    });
  }, []);

  const reset = useCallback((data = {}) => {
    setInputValue(data);
    setErrorMessage({});
    setIsValid(false);
    setIsInputValid({});
  }, [])

  return {
    inputValue,
    errorMessage,
    isValid,
    isInputValid,
    handleChange,
    reset,
    setValue,
  };
}
