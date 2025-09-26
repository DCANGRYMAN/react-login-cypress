/* describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
}) */

describe("Login Flow", () => {
  beforeEach(() => {
    cy.visit("/"); // assume que o servidor do Vite está rodando em localhost:5173
  });

  it("deve logar com usuário correto", () => {
    cy.get("[data-cy=username]").type("admin");
    cy.get("[data-cy=password]").type("1234");
    cy.get("[data-cy=login-button]").click();

    cy.contains("Bem-vindo, admin!").should("be.visible");
  });

  it("não deve logar com usuário incorreto", () => {
    cy.get("[data-cy=username]").type("errado");
    cy.get("[data-cy=password]").type("0000");
    cy.get("[data-cy=login-button]").click();

    cy.on("window:alert", (txt) => {
      expect(txt).to.contains("Usuário ou senha incorretos");
    });
  });
});
