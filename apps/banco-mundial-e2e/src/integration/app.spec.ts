import { visitHome, getNavbar, visitRegion, getButton, visitPais } from '../support/app.po';

describe('GIVEN: la app banco mundial', () => {
  beforeEach(() => visitHome());

  context('WHEN: el usuario visita la home page', () => {
    it('THEN: Debería tener un Navbar en el header con su título', () => {
      getNavbar().contains('Regiones del mundo');
    });
    it('THEN: Debería tener un Navbar en el footer con el diseñador', () => {
      getNavbar().contains('Design Wolfmoon');
    });
  });
});


describe('GIVEN: la app banco mundial', () => {
  beforeEach(() => visitRegion());

  context('WHEN: el usuario visita la página de la región', () => {
    it('THEN: Debería tener un botón para volver a regiones', () => {
      getButton().contains('Volver a Regiones');
    });
  });
});

describe('GIVEN: la app banco mundial', () => {
  beforeEach(() => visitPais());

  context('WHEN: el usuario visita la página del pais', () => {
    it('THEN: Debería tener un botón para volver a la región', () => {
      getButton().contains('Volver a Region');
    });
  });
});

