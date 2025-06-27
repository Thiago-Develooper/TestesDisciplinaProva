describe('Ordenação de Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    
    cy.get('#user-name').type('standard_user');
    
    cy.get('#password').type('secret_sauce');
    
    cy.get('#login-button').click();
  });

  it('Ordena produtos do A ao Z', () => {
    cy.get('.product_sort_container').select('az');
  });

  it('Ordena produtos do Z ao A', () => {
    cy.get('.product_sort_container').select('za');
  });

  it('Ordena produtos do preço mais baixo para o mais alto', () => {
    cy.get('.product_sort_container').select('lohi');
  });

  it('Ordena produtos do preço mais alto para o mais baixo', () => {
    cy.get('.product_sort_container').select('hilo');
  });
});