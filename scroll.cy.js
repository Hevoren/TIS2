describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.drom.ru/')
    cy.scrollTo(0, 1000, { duration: 2000 }).wait(1000)
    cy.scrollTo(1000, 100, { duration: 2000 }).wait(1000)
    cy.scrollTo(1000, 5000, { duration: 2000 }).wait(1000)
  })
})