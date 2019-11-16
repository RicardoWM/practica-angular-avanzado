declare var cy;

export const visitHome = () => cy.visit('/');
export const visitRegion = () => cy.visit('/region');
export const visitPais = () => cy.visit('/region/pais');
export const getNavbar = () => cy.get('nav');
export const getButton = () => cy.get('button');
