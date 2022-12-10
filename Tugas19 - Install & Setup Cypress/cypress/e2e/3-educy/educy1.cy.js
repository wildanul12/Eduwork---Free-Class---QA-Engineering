describe('My First Test', () => {
  it('clicking "type" shows the right headings', () => {
  cy.visit('https://example.cypress.io')
  
  cy.pause()
  
  cy.contains('type').click()
  
  // Should be on a new URL which includes '/commands/action'
  cy.url().should('include', '/commands/action')
  
  // Get an input, type into it and verify that the value has been updates
  cy.get('.action-email')
  .type('wildanul08@gmail.com')
  .should('have.value', 'wildanul08@gmail.com')
  })
  })