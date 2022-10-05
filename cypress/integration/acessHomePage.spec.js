/// <reference types="Cypress" />

describe('E-commerce page test automation ', () => {    //describe scenario and callback function
    it('Visiting HomePage', () => { //callback function
      cy.accessSite()                                       // "access site" custom command

      cy.url().should('eq', Cypress.env('url'))
      cy.title().should('be.equal', 'Automação com Batista')  //verify Title
    })
  })
  