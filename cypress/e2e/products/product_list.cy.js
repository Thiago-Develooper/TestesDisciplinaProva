describe('Lista Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    
    cy.get('#user-name').type('standard_user');
    
    cy.get('#password').type('secret_sauce');
    
    cy.get('#login-button').click();
  });

  it("Garante que a lista de produtos está visível e preenchida com itens.", () => {
    cy.get('.inventory_list').should('be.visible');
    
    cy.get('.inventory_item').its('length').should('be.greaterThan', 0);
  });
});