describe('Авторизация', () => {
  it('passes', () => {
    cy.visit('https://my.drom.ru/sign?return=https%3A%2F%2Fwww.drom.ru%2F%3Ftcb%3D1680676435')
    cy.get('#sign').type('89234056154')
    cy.get('#password').type('asdad12341243')
    cy.get('#signbutton').click()
  })
})

describe('Регистрация', () => {
  it('passes', () => {
    cy.visit('https://my.drom.ru/sign?return=https%3A%2F%2Fwww.drom.ru%2F%3Ftcb%3D1680676435')
    cy.get(':nth-child(2) > label').click()
    cy.get('#sign').type('89234065123')
    cy.get('#signbutton').click()
    cy.get('#password').type('1234')
    cy.get('.bzr-btn').click()
  })
})