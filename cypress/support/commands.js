Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Rogerio')
  cy.get('#lastName').type('Portilho')
  cy.get('#email').type('rogerportilhoart@gmail.com')
  cy.get('#open-text-area').type('Teste')
  cy.contains('button', 'Enviar').click()
})