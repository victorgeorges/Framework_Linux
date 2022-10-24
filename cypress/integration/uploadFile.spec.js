/// <reference types="Cypress" />

context(`Uplaod File`,()=>{ 
    beforeEach(()=>{ //before each iteration time, visit url
        cy.visit(Cypress.env('url'))   
    })
    
    it(`Upload`,()=>{
        cy.get(`:nth-child(6) > .collapsible-header`).click({force: true}).should(`be.visible`,`Upload de Arquivo`) //click on and verify `Upload de Arquivo` be visible
        cy.get(`.active > .collapsible-body > ul > :nth-child(1) > a`).click({force: true}).should(`be.visible`,`Upload de arquivo`) //click on and verify
        cy.get('.btn > #upload').selectFile('./mydownloads/example.jpg').should(`not.be.visible`, 'No file selected') // upload file
    })
})