
//variables
const mudancaFoco = '.collapsible > li:nth-of-type(3) > .collapsible-header' //Mudança de Foco menu option css selector
const iframeSelector = "[href='/mudancadefoco/iframe']" //Iframe menu option css selector
 
const getIframeDocument = () => { //const to be able to work inside iframe
    return cy
    .get('#id_do_iframe')
    .its('0.contentDocument').should('exist')
  }

const getIframeBody = () => { //const to be able to work inside iframe
    return getIframeDocument()
    .its('body').should('not.be.undefined')
    .then(cy.wrap)
  }

//end of variables

describe('Testing Automação com Batista Iframe Page', () => {
    it('Access site', () => {       
        cy.accessSite()       // "access site" custom command
        cy.url().should('eq', 'https://automacaocombatista.herokuapp.com/treinamento/home') //verify that url is correct
    })

    it('Access iframe page', () => {
        cy.get(mudancaFoco).click({force: true}) //click on the "Mudança de Foco" option at the left menu using const mudancaFoco
        cy.get(iframeSelector).click({force: true}) //click on the Iframe option inside "Mudança de Foco" selection using const iframeSelector   
    })

    it('fill the form', () => {
        getIframeBody().find('#first_name').type("José") //fills iframe first name with "José"
        getIframeBody().find('#last_name').type("Silveira") //fills iframe last name with "Silveira"
        getIframeBody().find('#password').type("password123") //fills iframe password with "password123"
        getIframeBody().find('#email').type("silveirinha@gmail.com") //fills iframe email with "silveirinha@gmail.com"
        getIframeBody().find('.materialize-textarea').type("Testing Text") //fills iframe Text Area with "Testing Text"
    })
      
})