/// <reference types="cypress" />

describe("TEST #3", () => {
	it("Card button should open Modal", () => {
		cy.visit("http://localhost:3000")
		cy.get("#zapOffers").click()
		cy.screenshot()
		cy.get("#display-info").click()
		cy.screenshot()
		cy.get("#close-modal").click()
		cy.get("#zapOffers").click()
		cy.screenshot()
		cy.get("#display-info").click()
		cy.screenshot()
		cy.get("#close-modal").click()
		cy.screenshot()
	})
})
