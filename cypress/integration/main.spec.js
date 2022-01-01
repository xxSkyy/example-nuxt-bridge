/// <reference types="cypress" />

const PORT = process.env.PORT || 3000

describe("Pinia test", () => {
  beforeEach(() => {
    cy.visit(`http://localhost:${PORT}`)
  })

  it("works", () => {
    cy.wait(500) // wait for the JS to load
      .get("[data-testid=input]")
      .type("Jared")
      .get("[data-testid=name]")
      .should("contain.text", "Jared")
  })
})
