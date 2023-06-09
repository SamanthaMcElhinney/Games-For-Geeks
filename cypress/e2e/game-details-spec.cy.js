describe("Games Page: After clicking on the associated game card I will see a list of games with associated game level", () => {
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
        fixture: "data.json",
      }
    );
    cy.visit("http://localhost:3000/single-game");
  });
  it("should have information displayed about the game after clicking on the specific card", () => {
    cy.get(".card-container").get(".game-card").last().click();
    cy.get(".details-title").should(
      "have.text",
      "More Details about Gloomhaven ✨"
    );
    cy.get(".details-image").should("exist");
    cy.get(".details-description > p").should("exist");
    cy.get(".details-price").should("have.text", "Price: $105.97");
    cy.get(".details-published").should("have.text", "Year Published: 2017");
    cy.get(".details-players").should(
      "have.text",
      "Players required for the game: 1- 4"
    );
    cy.get(".details-learning").should(
      "have.text",
      "Average learning complexity: 3.90"
    );
    cy.get(".details-strategy").should(
      "have.text",
      "Average strategy complexity: 3.60"
    );
  });
  it("should be able to be taken back to the home page to select another game type", () => {
    cy.get(".header-image").click()
    cy.url().should("eq", "http://localhost:3000/");
  })
});
