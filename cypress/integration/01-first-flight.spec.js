/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Create a New Item', () => {
  beforeEach(() => {
    cy.visit('/jetsetter');
  });
  it('should have a form', () => {
    cy.get('form').should('exist');
  });

  it('should have the words "Add Item"', () => {
    cy.contains('Add Item');
  });
});
