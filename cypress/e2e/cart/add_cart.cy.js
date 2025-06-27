describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');

    cy.get('#user-name').type('standard_user');

    cy.get('#password').type('secret_sauce');

    cy.get('#login-button').click();
  });

  it('add dois produtos carrinho', () => {
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click();

    cy.get(':nth-child(2) > .pricebar > .btn_primary').click();
    
    cy.get('.fa-layers-counter').should('contain.text', '2');
  });
});