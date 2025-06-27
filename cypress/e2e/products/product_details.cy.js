describe('Detalhes Produto', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/');
    
    cy.get('#user-name').type('standard_user');
    
    cy.get('#password').type('secret_sauce');
    
    cy.get('#login-button').click();
  });

  it('Checa se o 1 produto exibe nome, img, preco e desc', () => {
    cy.get('.inventory_item').first().as('produtoInicial');
    
    cy.get('@produtoInicial').find('.inventory_item_img').should('be.visible');
    
    cy.get('@produtoInicial').find('.inventory_item_name').should('not.be.empty');
    
    cy.get('@produtoInicial').find('.inventory_item_desc').should('not.be.empty');
    
    cy.get('@produtoInicial').find('.inventory_item_price').should('not.be.empty');
    
    cy.get('@produtoInicial').find('button.btn_inventory').should('be.visible');
  });
});