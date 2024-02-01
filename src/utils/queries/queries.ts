type queriesType = {
  desktop: string;
  smallDesktop: string;
  bigTablet: string;
  largeTablet: string;
  tablet: string;
  mobile: string;
};

export const queries: queriesType = {
  desktop: '@media(min-width: 1101px)',
  smallDesktop: '@media (max-width: 1100px)',
  bigTablet: '@media (max-width: 900px)',
  largeTablet: '@media (max-width: 768px)',
  tablet: '@media (max-width: 600px)',
  mobile: '@media (max-width: 500px)',
};
