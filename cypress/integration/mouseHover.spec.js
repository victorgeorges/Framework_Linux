describe('mouse hover interaction', () => { //describe function
    it('successfully perform mouse hover interaction', () => { //callback function
        cy.accessSite()      // "access site" custom command
        cy.url().should('eq', Cypress.env('url')) //verify that url is correct
        cy.get('a[href="/iteracoes/mousehover"]')
          .click({force: true}) //clicks on drag and drop
          .url('https://automacaocombatista.herokuapp.com/iteracoes/mousehover')
        
        cy.get('.activator').click() //forces a mousehover interaction usin a click

        cy.get('.card-title > div').should('be.visible') //verify card after mouse hover action
    })
})