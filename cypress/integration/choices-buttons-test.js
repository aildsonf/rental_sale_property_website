/// <reference types="cypress" />

describe("TEST #2", () => {
	it("Button should open Offers", () => {
		cy.visit("http://localhost:3000")
		cy.get("#zapOffers").should("have.attr", "href", "#display-offers")
		cy.get("#zapOffers").click()
		cy.screenshot()
	})
})
