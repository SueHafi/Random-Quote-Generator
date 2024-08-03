describe("", () => {
  it("can go to the add quote page and submit new quote with no errors", () => {
    cy.visit("/");
    cy.contains(/add quote/i).click();
    cy.get('input[name="quote"]').type("test content{enter}");
  });

  it("can go to the add quote page and returns by pressing cancel button", ()=>{
    cy.visit("/");
    cy.contains(/add quote/i).click();
    cy.contains(/cancel/i).click();
    cy.contains(/new quote/i);
  })
});
