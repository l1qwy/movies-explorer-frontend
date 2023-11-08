const ConvertToTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч ${minutes < 10 ? "0" : ""}${minutes}м`;
}


const MobileDisplay = window.innerWidth >= 570 || window.innerWidth >= 320
const TabletDisplay = window.innerWidth >= 1024 || window.innerWidth >= 570
const LaptopDisplay = window.innerWidth >= 1280 || window.innerWidth >= 1024
const DesktopDisplay = window.innerWidth >= 2560 || window.innerWidth >= 1280

const MobileDisplayAddCard =  window.innerWidth >= 320 && window.innerWidth <= 768


export {
  ConvertToTime,
  MobileDisplay,
  TabletDisplay,
  LaptopDisplay,
  DesktopDisplay,
  MobileDisplayAddCard
};
