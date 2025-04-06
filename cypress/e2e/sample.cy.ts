describe('Página inicial', () => {
  it('deve conter o título correto', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Dantas BarberShop')
  })
})
