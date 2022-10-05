
//variables
const mudancaFoco = '.collapsible > li:nth-of-type(3) > .collapsible-header' //Mudança de Foco menu option css selector
const modalSelector = ".collapsible [href='/mudancadefoco/modal']" //Modal menu option css selector
const modalText = 'Pensando mais a longo prazo, a execução dos pontos do programa garante a contribuição de um grupo importante na determinação da gestão inovadora da qual fazemos parte. Ainda assim, existem dúvidas a respeito de como o surgimento do comércio virtual desafia a capacidade de equalização das diretrizes de desenvolvimento para o futuro. A certificação de metodologias que nos auxiliam a lidar com o julgamento imparcial das eventualidades talvez venha a ressaltar a relatividade do impacto na agilidade decisória. Acima de tudo, é fundamental ressaltar que a percepção das dificuldades auxilia a preparação e a composição das novas proposições. ' //creating const to help check the modal text
//end of variables

describe('Testing Automação com Batista Modal Page', () => {

    it('Access site', () => {
        cy.accessSite()       // "access site" custom command
        cy.url().should('eq', Cypress.env('url')) //verify that url is correct
    })
    it('Access modal page', () => {
        cy.get(mudancaFoco).click({force: true}) //click on the "Mudança de Foco" option at the left menu using const mudancaFoco
        cy.get(modalSelector).click({force: true}) //click on the Modal option inside "Mudança de Foco" selection using const modalSelector
    })
    it('Testing Modal', () => {
        cy.get('.waves-light').click({force: true}) //Clicking "Abrir" button to open modal
        cy.get('p').should('have.text', modalText) //Getting <p> from modal and comparing the text with modalText const
        cy.get('.modal-close').click({force: true}) //Clicking "Fechar" modal button to close the modal window
        cy.get('.s9 .col > div:nth-of-type(2)').should('not.be.visible') //Checking if the modal window closed/is not visible
    })
})