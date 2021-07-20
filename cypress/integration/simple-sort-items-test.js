/// <reference types="cypress" />

describe("TEST #6", () => {
	it("Should change page number if click paginate buttons", () => {
		cy.visit("http://localhost:3000")
		cy.get("#zapOffers").click()
		cy.get("#ascSort").click()
		cy.screenshot()
		cy.get("#descSort").click()
		cy.screenshot()
		cy.get("#vivarealOffers").click()
		cy.get("#ascSort").click()
		cy.screenshot()
		cy.get("#descSort").click()
		cy.screenshot()
	})
})
