describe('Home Page: On page load I will be able to see an explanation of the purpose of the application and some directions on what I should expect to be able to do with it', () => {
  beforeEach(()=> {
    cy.intercept(
      "GET",
      "https://api.boardgameatlas.com/api/search?min_players=1&client_id=t0AVnrNPcW", {
        statusCode: 200,
        fixture:"data.json"
      })
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
  })
  it('should have a header with a logo, message, and option of three cards to select upon visiting the page', () => {
    cy.get('.header-image').should('exist')
    cy.get('.slogan').should('have.text',"Unlock the Fun: Select Your Board Game Adventure!")
    cy.get('.game-type-container').get('.solo').contains('Solo')
    cy.get(".game-type-container").get(".duo").contains("Duo");
     cy.get(".game-type-container").get(".party").contains("Party");
  })
  it('should be able to move to the next page after clicking a card', () => {
    cy.get(".solo").click()
    cy.url().should("eq", 'http://localhost:3000/single-game');
  })
})