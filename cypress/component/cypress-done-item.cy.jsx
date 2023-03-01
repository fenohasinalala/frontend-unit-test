import React from 'react';
import { mount } from 'cypress/react18';
import App from "../../src/App";

describe('a', () => {
  it('add to do', () => {
    mount(<App />)
    cy.get('#add-todo').type('input ok{enter}')
    cy.get('.App>div').eq(0).contains('input ok').should('be.visible')
    cy.get('[type="checkbox"]').check()
    cy.get('.App>div').eq(1).contains('input ok').should('be.visible')

  })
})