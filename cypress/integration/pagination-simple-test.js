/// <reference types="cypress" />

describe("TEST #5", () => {
	it("Should change page number if click paginate buttons", () => {
		cy.visit("http://localhost:3000")
		cy.get("#zapOffers").click()
		cy.get("#pagPrevBtn").click()
		cy.get("#current-page").contains(1).screenshot()
		cy.get("#current-page").screenshot()
		cy.get("#pagNextBtn").click()
		cy.get("#current-page").contains(2).screenshot()
		cy.get("#current-page").screenshot()
	})
})
