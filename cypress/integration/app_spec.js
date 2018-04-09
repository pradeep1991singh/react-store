describe('react-store', function() {
  it('products and cart page should render and search should work properly', function() {
    // Visit home page
    cy.visit('/')

    // Check home page nav and titel
    cy.get('nav').should('be.visible')
    cy.contains('React Store')

    // Page should have 100 products
    cy
      .get('.products')
      .children()
      .should('have.length', 100)

    // Add first product to cart
    cy
      .get('.products .card')
      .get('.card-body .actions .add')
      .first()
      .click()

    // Remove Added product
    cy
      .get('.products .card')
      .get('.card-body .actions .remove')
      .first()
      .click()

    // Add second product to cart
    cy
      .get('.products .card')
      .get('.card-body .actions .add')
      .eq(1)
      .click()

    // Visit Cart page and verify that product is added
    cy.get('.cart').click()
    cy
      .get('.checkout ul')
      .children()
      .should('have.length', 2)
  })
})
