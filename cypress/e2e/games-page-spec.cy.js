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
        fixture: '/data.json',
      }
    );
    cy.visit("http://localhost:3000/single-game");
  });
  // it("should be able to visit the page associated with the correct card", () => {
  // cy.get(".solo").click();
  // cy.url().should("eq", "http://localhost:3000/single-game");
  // });
  it.skip("should display a button to show favorites", () => {
    cy.get('.show-favs-img').should('exist')
  });
  it.skip("should display cards with the associated number of players", () => {
    cy.get(".card-container").get('.game-card').should("have.length", 3)
  })
  it('should contain information on the card associated with a game', () => {
    cy.get('.card-container').get('.game-card').first().get('.title-container')
    .contains('Scythe')
    cy.get(":nth-child(1) > .link-no-underline > .game-card > .game-image").should('have.attr', 'src')
    cy.get(
      ":nth-child(1) > .link-no-underline > .game-card > .game-rating"
    ).should("have.text", "Rating: 4.21/5 ⭐️");
    cy.get(":nth-child(1) > .link-no-underline > .game-card > .game-playtime")
    .should("have.text", "Play time: 90-120 mins")
  })
  it("should have a button to favorite the card that starts out empty", () => {
    cy.get(
      ":nth-child(1) > .link-no-underline > .game-card > .favorite-button"
    ).should("be.visible")
  })
  it("should be able to click the heart button to favorite a card and see the color change after to add the favorites", () => {
        cy.get(
          ":nth-child(1) > .link-no-underline > .game-card > .favorite-button"
        ).click().should("have.text", "💜")
  })
  it("should be able to click the card and be taken to further details about the card", () =>{
     cy.get(".card-container").get(".game-card").last().click()
    cy.url().should("eq", "http://localhost:3000/game/RLlDWHh7hR");
  })
});
