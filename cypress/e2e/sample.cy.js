describe('My First Test', () => {
  it('visit home', () => {
    cy.visit('http://localhost:3000/');
    cy.findByRole('button', {
      name: /counter/i,
    }).click();
    cy.get('.dropdown-item:nth-child(2)').click();
    cy.get('.me-3:nth-child(2)').click();
    cy.get('.me-3:nth-child(2)').click();

    let textbox = cy.findByRole('textbox');

    textbox.should('have.value', '7');
  });
});
