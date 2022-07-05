const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "480px",
  mobileXL: "640px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  //   tablet: `(min-width: ${size.tablet})`,
  //   laptop: `(min-width: ${size.laptop})`,

  potrait: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  tablet: `(min-width: ${size.mobileXL}) and (max-width: ${size.tablet})`,
  tabletS: `(min-width: ${size.mobileL}) and (max-width: ${size.mobileXL})`,
  phone: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,

  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

// @media only screen
//   and (min-device-width: 768px)
//   and (max-device-width: 1024px)
//   and (orientation: portrait)
//   and (-webkit-min-device-pixel-ratio: 1) {

// }
