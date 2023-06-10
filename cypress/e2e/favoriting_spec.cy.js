describe("Favorite's Page: After clicking the show favorites button I will see the favorited cards", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.boardgameatlas.com/api/search?min_players=1&client_id=t0AVnrNPcW",
      {
        statusCode: 200,
        fixture: "data.json",
      }
    );
    cy.intercept(
      "GET",
      "https://api.boardgameatlas.com/api/search?min_players=2&client_id=t0AVnrNPcW",
      {
        statusCode: 200,
        fixture: "data.json",
      }
    );
    cy.intercept(
      "GET",
      "https://api.boardgameatlas.com/api/search?min_players=3&client_id=t0AVnrNPcW",
      {
        statusCode: 200,
        fixture: "/data.json",
      }
    )
    cy.visit("http://localhost:3000/single-game");
  });
  it("should be able to view the favorite game cards after favoriting them", () => {
    cy.get(":nth-child(1) > .game-card > div.link-no-underline > .favorite-button")
      .click()
      .should("have.text", "💜");
    cy.get(":nth-child(2) > .game-card > div.link-no-underline > .favorite-button")
      .click()
      .should("have.text", "💜");
    cy.get(".show-favs-img").click();
    cy.get('.card-container').get(".game-card").should("have.length", 2)
    cy.get(":nth-child(2) > .game-card").contains("Wingspan")
  });
  it("should be able to unfavorite cards and return home", () => {
      cy.get(":nth-child(1) > .game-card > div.link-no-underline > .favorite-button").click();
      cy.get(".show-favs-img").click();
      cy.get(".card-container").get(".game-card").should("have.length", 1);
      cy.get(":nth-child(1) > .game-card").contains("Scythe");
      cy.get(".header-image").click()
      cy.url().should("eq", "http://localhost:3000/")
  })
});
