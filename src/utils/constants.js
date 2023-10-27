const validation = {
  inputSelector: ".profile__field",
  submitButtonSelector: ".submit",
  inactiveButtonClass: "submit_disabled",
  inputErrorClass: "form__field_error",
  errorClass: "form__error",
};

const userProfileInfo = {
  userName: ".profile__title",
  userEmail: ".profile__description",
};

const cardTemplate = "#galery-item";
const galeryContainer = ".galery";
const durationHourMinute = 60;
const shortDuration = 41;

const errorUpdatePrifile = "При обновлении профиля произошла ошибка."

export {
  validation,
  userProfileInfo,
  cardTemplate,
  galeryContainer,
  durationHourMinute,
  shortDuration,
  errorUpdatePrifile
};
