Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){ //criando um comando que vai digitar todos os dados abaixo
    cy.get('#firstName').type('Priscilla')
    cy.get('#lastName').type('Albuqerque')
    cy.get('#email').type('priscilla@exemplo.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

})