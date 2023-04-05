describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.drom.ru/')
    cy.get('.css-nxh0g4').click()
    cy.visit('https://www.drom.ru/')
    cy.get('.css-1ssk78f').click()
    cy.visit('https://www.drom.ru/')
    cy.get('.css-ypn1vu').click()
  })
})