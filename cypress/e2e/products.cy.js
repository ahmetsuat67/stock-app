describe("products-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("products", () => {
        cy.login()
        cy.get("[data-test='titleProducts']").contains("Products").should("be.visible").click({ force: true });
        cy.get("[data-test='productsHeader']").contains("Products").should("be.visible");
        cy.wait(20000)
        cy.get("[data-test='productsBtn']",{ timeout: 20000 }).contains("NEW PRODUCT").should("be.visible").click({ force: true });
        cy.get("[data-test='productsCat']",{ timeout: 20000 }).contains("Categories")
        
        cy.get("#category").click({ force: true })
        cy.get("[data-test='Drink']").click({ force: true })
        

        cy.get("[data-test='productsBrands']").contains("Brands").click({ force: true })
        cy.get("[data-test='productsName']").contains("Product Name").should("be.visible").click({ force: true });
        cy.get("[data-test='productsSbmt']").contains("Submit").should("be.visible").click({ force: true });
        cy.get("[data-test='productsListName']").should("be.visible");
        cy.get("[data-test='productsListBrands']").should("be.visible");
        cy.get("[data-test='productsListName']").should("be.visible");
        cy.get("[data-test='deleteBtn']").should("be.visible").click({ force: true });
        










    });
});