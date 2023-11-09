const ConvertToTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes < 10 ? "0" : ""}${minutes}м`;
}

const timeToShorth = 40

const ScreenDesktop = 1280
const ScreenLaptop = 1024
const ScreenPad = 866
const ScreenMobile = 484
const setMoreScreenDesktop = 16
const setWithScreenDesktop = 12
const setWithScreenLaptop = 12
const setWithScreenPad = 8
const setWithScreenMobile = 5
const getMoreScreenDesktop = 4
const getWithScreenDesktop = 4
const getWithScreenLaptop = 3
const getWithScreenPad = 2
const getWithScreenMobile = 2


export {
  ConvertToTime,
  ScreenDesktop,
  ScreenLaptop,
  ScreenPad,
  ScreenMobile,
  setMoreScreenDesktop,
  setWithScreenDesktop,
  setWithScreenLaptop,
  setWithScreenPad,
  setWithScreenMobile,
  getMoreScreenDesktop,
  getWithScreenDesktop,
  getWithScreenLaptop,
  getWithScreenPad,
  getWithScreenMobile,
  timeToShorth
};
