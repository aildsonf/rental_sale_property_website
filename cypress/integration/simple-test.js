/// <reference types="cypress" />

describe("TEST #1", function () {
	it("Find text on homepage", function () {
		cy.visit("http://localhost:3000")
		cy.title().should
		cy.contains("Grupo ZAP Challenge")
		cy.contains("Procurando um novo lar?")
	})
})
