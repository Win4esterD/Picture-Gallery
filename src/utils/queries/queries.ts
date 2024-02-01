type queriesType = {
  desktop: string,
  smallDesktop: string;
  bigTablet: string;
  tablet: string;
};

export const queries: queriesType = {
  desktop: '@media(min-width: 1101px)',
  smallDesktop: '@media (max-width: 1100px)',
  bigTablet: '@media (max-width: 900px)',
  tablet: '@media (max-width: 600px)',
};
