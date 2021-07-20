/// <reference types="cypress" />

describe("TEST #1", function () {
	it("Find Header title, find page h1", function () {
		cy.visit("http://localhost:3000")
		cy.contains("Grupo ZAP Challenge")
		cy.contains("Procurando um novo lar?")
	})
})
