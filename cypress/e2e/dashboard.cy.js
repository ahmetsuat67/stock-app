describe("dashboard-test", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        cy.viewport(1200, 1200);
    });

    it("dashboard", () => {
        cy.login()
        cy.get("[data-test='stockHeader']").contains("Stock App").should("be.visible");
        cy.get("[data-test='logoutBtn']").contains("Logout").should("be.visible");
        cy.get("[data-test='dashboardHeader']").contains("Dashboard").should("be.visible");
        cy.get("[data-testid='MonetizationOnIcon']").should("be.visible");
        cy.get("[data-test='titlesales']").contains("sales").should("be.visible");
        cy.get("[data-test='kpiValue']").first().should("be.visible");
        cy.get("[data-testid='ShoppingCartIcon']").should("be.visible");
        cy.get("[data-test='titleprofit']").contains("profit").should("be.visible");
        // cy.get("[data-test='kpiValue']").should("be.visible"); multiple
        cy.get("[data-testid='PaymentsIcon']").should("be.visible");
        cy.get("[data-test='titlepurchases']").contains("purchases").should("be.visible");
        cy.get("[data-test='kpiValue']").last().should("be.visible");
        cy.get("[data-test='chartsSales']").contains("Total Sales").should("be.visible");
        cy.get('.recharts-legend-wrapper').first().contains("quantity").should("be.visible");
        cy.get("[data-test='chartsPurchases']").contains("Total Purchases").should("be.visible");
        cy.get('.recharts-legend-wrapper').last().contains("price").should("be.visible");




    });
});