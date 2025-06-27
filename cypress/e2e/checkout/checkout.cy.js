describe("Fluxo de Checkout", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");
    
    cy.get("#password").type("secret_sauce");
    
    cy.get("#login-button").click();
    
    cy.get(":nth-child(1) > .pricebar > .btn_primary").click();
    
    cy.get(":nth-child(2) > .pricebar > .btn_primary").click();
  });

  it("Deve iniciar o processo de checkout", () => {
    cy.get(".shopping_cart_link").click();
  });

  it("Deve preencher os dados obrigatórios do checkout", () => {
    cy.get(".shopping_cart_link").click();
    
    cy.get(".btn_action").click();
    
    cy.get('[data-test="firstName"]').type("Nome");
    
    cy.get('[data-test="lastName"]').type("Sobrenome");
    
    cy.get('[data-test="postalCode"]').type("7000000");
    
    cy.get(".btn_primary").click();
  });

  it("Finaliza a compra e verifica mensagem de confirmação", () => {
    cy.get(".shopping_cart_link").click();
    
    cy.get(".btn_action").click();
    
    cy.get('[data-test="firstName"]').type("Nome");
    
    cy.get('[data-test="lastName"]').type("Sobrenome");
    
    cy.get('[data-test="postalCode"]').type("7000000");
    
    cy.get(".btn_primary").click();
    
    cy.get(".btn_action").click();
    
    cy.get(".complete-text")
      .invoke("text")
      .then((text) => {
        const normalizedText = text.replace(/\s+/g, " ").trim();
        const expectedText =
          "Your order has been dispatched, and will arrive just as fast as the pony can get there!";
        expect(normalizedText).to.eq(expectedText);
      });
  });
});
