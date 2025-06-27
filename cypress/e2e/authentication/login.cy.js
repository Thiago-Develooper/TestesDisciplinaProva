describe("Funcionalidade Login", () => {
  it("Deve realizar login com sucesso", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");

    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("contain", "/inventory.html");

  });

  it("Tenta login com usuário incorreto", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard");

    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.get("h3").should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
  });

  it("Tenta login com senha errada", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");

    cy.get("#password").type("secret");

    cy.get("#login-button").click();

    cy.get("h3").should(
      "contain.text",
      "Username and password do not match any user in this service"
    );
  });

  it("Deve exibir erro quando o campo usuário estiver vazio", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.get("h3").should("contain.text", "Username is required");
  });

  it("Deve exibir erro quando o campo senha estiver vazio", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");

    cy.get("#login-button").click();
    
    cy.get("h3").should("contain.text", "Password is required");
  });
});
