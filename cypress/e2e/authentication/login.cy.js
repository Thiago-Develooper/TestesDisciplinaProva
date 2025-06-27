describe("Funcionalidade Login", () => {
  it("tem que fazer Login com sucesso", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");

    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.url().should("contain", "/inventory.html");

  });

  it("Login com usuário incorreto", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard");

    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.get("h3").should(
      "contain.text",
      "user and senha do not match any user"
    );
  });

  it("Login com senha incorreta", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");

    cy.get("#password").type("secret");

    cy.get("#login-button").click();

    cy.get("h3").should(
      "contain.text",
      "user and senha do not match any user"
    );
  });

  it("Mostrar erro quando o campo usuário estiver vazio", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#password").type("secret_sauce");

    cy.get("#login-button").click();

    cy.get("h3").should("contain.text", "user is required");
  });

  it("Mostrar erro quando o campo senha estiver vazio", () => {
    cy.visit("https://www.saucedemo.com/v1/");

    cy.get("#user-name").type("standard_user");

    cy.get("#login-button").click();
    
    cy.get("h3").should("contain.text", "senha is required");
  });
});
