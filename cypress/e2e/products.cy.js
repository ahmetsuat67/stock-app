describe("products-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("products", () => {
        cy.login()

        cy.get("[data-test='titleProducts']").contains("Products").should("be.visible").click({ force: true });
        cy.get("[data-test='productsHeader']").contains("Products").should("be.visible");
        cy.get("[data-test='productsBtn']").contains("NEW PRODUCT").should("be.visible").click({ force: true });
        cy.get("[data-test='productsCat']").contains("Categories")
        cy.get("[data-testid='ArrowDropDownIcon']").click({ multiple: true })

        cy.get("[data-test='productsBrands']").contains("Brands").click({ force: true }).type("https://docs.cypress.io/img/logo/cypress-logo-dark.png");
        cy.get("[data-test='productsName']").contains("Product Name").should("be.visible").click({ force: true });
        cy.get("[data-test='productsSbmt']").contains("Submit").should("be.visible").click({ force: true });
        cy.get("[data-test='productsListName']").should("be.visible");
        cy.get("[data-test='productsListBrands']").should("be.visible");
        cy.get("[data-test='productsListName']").should("be.visible");
        cy.get("[data-test='deleteBtn']").should("be.visible").click({ force: true });
        










    });
});