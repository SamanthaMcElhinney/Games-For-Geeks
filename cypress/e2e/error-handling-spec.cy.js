describe("Error handling", () => {
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
    cy.visit("http://localhost:3000/");
  });
  it("should have an error if I navigate to an incorret url'", () => {
    cy.visit("http://localhost:3000/single-game/hoopinforlife");
    cy.get(".App > div > :nth-child(1)").contains("Sorry, you went down the wrong path!")
    cy.get(".App > div > :nth-child(2)").contains(
      "Please check your url and try again!"
    );
  });
  it("should have an error message if there is a server error", () => {
   cy.intercept(
     "GET",
     "https://api.boardgameatlas.com/api/search?min_players=1&client_id=t0AVnrNPcW",
     { statusCode: 403, fixture: "data.json" }
   )
     .get("div > :nth-child(2)")
     .contains("Sorry we are having issues with our server right now:403!");
  })
});
