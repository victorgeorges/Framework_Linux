/// <reference types="Cypress" />

context(`Upload File`,()=>{ 
    beforeEach(()=>{ //before each iteration time, visit url
        cy.accessSite()       // "access site" custom command
    })

    it(`List Users`,()=>{
        cy.tableList() // "table list " custom command
    })

    it(`Verify Itens`,()=>{
        cy.tableList()
        cy.contains(`tbody > :nth-child(2) > :nth-child(1)`, `Feijão`).should(`be.visible`) //verify itens
        cy.contains(`tbody > :nth-child(5) > :nth-child(1)`, `Leite`).should(`be.visible`) //verify itens
        cy.contains(`tbody > :nth-child(7) > :nth-child(1)`, `Carne`).should(`be.visible`) //verify itens
    })
})