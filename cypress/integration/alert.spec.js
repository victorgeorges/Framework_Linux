


describe('Testing Automação com Batista Alert Page', () => { //describe function
    it('Access site', () => { //callback function
        cy.accessSite()       // "access site" custom command
        cy.url().should('eq', Cypress.env('url')) //verify that url is correct     
    })

    it('Access alert page', () => { //callback function
        cy.get('.collapsible > li:nth-of-type(3) > .collapsible-header').click({force: true}) //click on the "Mudança de Foco" option at the left menu
        cy.get("[href='/mudancadefoco/alert']").click({force: true}) //click on the Alert option inside "Mudança de Foco" selection    
    })

    it('should trigger an alert with a message', () => {
        cy.get("[onclick='jsAlert()']").click() //click on the alert trigger button
        cy.on('window:alert', (text) => { //check if alert opens and if the alert text is the same as the output bellow
          expect(text).to.contains('Eu sou um alerta JS!')
        })
        cy.get("#result").should('have.text', "Você clicou no alerta com sucesso!!") //check if the confirmation message appears on page
        
    })

    

})