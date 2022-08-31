describe('My First Test', () => {
  it('visiter home', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', {
      name: /counter/i,
    }).click();
    cy.get('.dropdown-item:nth-child(4)').click();
    cy.get('.me-3:nth-child(2)').click();
    cy.get('.me-3:nth-child(2)').click();
  });
});
