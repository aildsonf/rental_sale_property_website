/// <reference types="cypress" />

describe("TEST #4", () => {
	it("Should reset page when changing offers provider", () => {
		cy.visit("http://localhost:3000")
		cy.get("#zapOffers").click()
		cy.get("#current-page")
		cy.screenshot()
		cy.get("#current-page").contains(1)
		cy.get("#vivarealOffers").click()
		cy.get("#current-page").contains(1)
		cy.screenshot()
	})
})
