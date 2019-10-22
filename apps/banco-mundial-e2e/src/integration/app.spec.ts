import { getGreeting } from '../support/app.po';

describe('banco-mundial', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to banco-mundial!');
  });
});
