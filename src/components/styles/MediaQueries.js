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
  potrait: `(min-width: ${size.tablet}) and (max-width: ${size.laptop})`,
  tablet: `(min-width: ${size.mobileXL}) and (max-width: ${size.tablet})`,
  tabletS: `(min-width: ${size.mobileL}) and (max-width: ${size.mobileXL})`,
  phone: `(min-width: ${size.mobileS}) and (max-width: ${size.mobileL})`,
};


