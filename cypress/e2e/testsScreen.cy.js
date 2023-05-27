///<reference types="cypress"/>

describe('work with basic element ', () => {
  beforeEach(() => {
    cy.accessSite()
  })

  it('Test 1 - Realizar Cadastro', () => {
    cy.typeName()
    cy.typeLastName()
    cy.clickRadioButtonMasc()
    cy.clickOnFoodPizza()
    cy.selectSchooling()
    cy.typeArea()
    cy.clickOnRegister()

    cy.verifyName().should('have.value', 'Cypress Test')
    cy.verifyLastName().should('have.value', 'Test')
    cy.verifyRadioButtonMasc().should('be.checked')
    cy.verifyFoodPizza().should('be.checked')
    cy.verifySchooling().should('have.value', '2graucomp')
    cy.verifyArea().should('have.value', 'textarea')
    cy.verifyUserRegistered().should('have.text', 'Cadastrado!')

  })
  it('Test 2 - Validar Links', () => {
    cy.clickOnLink()
    cy.refreshPage()
    cy.verifyLinkText().should('have.text', 'Voltar')
    cy.verifyResultText().should('have.not.text', 'Voltou')

  })

  it('Test 3 - Validar Data', () => {
    cy.clickOnHour()
    cy.verifyHour().should('have.not.text', 'Status: Nao cadastrado')
    cy.verifyHour().should('contain', '02/2023')
  })


})



