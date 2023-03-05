import React from 'react';
import { mount } from 'cypress/react18';
import App from "../../src/App";

describe('add to-do', () => {
  it('add to do', () => {
    mount(<App />)
    cy.get('#add-todo').type('input ok{enter}')
    cy.get('.App>div').eq(0).contains('input ok').should('be.visible')
    cy.get('[type="checkbox"]').should('be.visible')
  })
})