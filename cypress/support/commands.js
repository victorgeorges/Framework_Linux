import '@4tw/cypress-drag-drop'
require('cypress-downloadfile/lib/downloadFileCommand')

Cypress.Commands.add('accessSite', () => { //add "access site" custom command
    cy.clock(setTimeout)//freeze the clock
    cy.visit(Cypress.env('url'))  //visit homepage
    cy.tick()//unfreeze the clock
})

Cypress.Commands.add('accessListSite', () => { 
    cy.get(`:nth-child(1) > .collapsible-header`).click({force: true}) //click on menu to obtain `Lista de Usuários`
    cy.get(`.active > .collapsible-body > ul > :nth-child(2) > a`).click({force: true}) //click on `Lista de Usuários` and load page
})

Cypress.Commands.add('tableList', () => { 
    cy.get(`:nth-child(2) > .collapsible-header`).click({force: true}).should(`be.visible`, `Tabela`) //click on "Tabela" and verify
    cy.get(`:nth-child(7) > a`).click({force: true}).url(`https://automacaocombatista.herokuapp.com/buscaelementos/table`)//click on and verify url
})



