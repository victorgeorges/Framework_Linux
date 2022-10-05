describe('drag and drop interaction', () => { //describe function
    it('successfully perform drag and drop', () => { //callback function
        cy.accessSite()       // "access site" custom command
        cy.get(':nth-child(5) > .collapsible-header').click({force: true}) //clicks on iteracoes
        cy.get('a[href="/iteracoes/draganddrop"]')
          .click({force: true}) //clicks on drag and drop
          .url('https://automacaocombatista.herokuapp.com/iteracoes/draganddrop')
        
        cy.get('#winston').drag('#dropzone', {force: true}).then((success) => { // perform drag and drop interaction and verify if it wass successful
            assert.isTrue(success)
          })
    })
})
