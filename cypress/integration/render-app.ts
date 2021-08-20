describe('render app', () => {
  it('Renders content on the streamed epub page', () => {
    cy.loadPage('/streamed-epub');

    // check that all the essential buttons are on the page.
    cy.findByRole('link', { name: 'Return to NYPL' }).should('exist');
    cy.findByRole('button', { name: 'Table of Contents' }).should('exist');
    cy.findByRole('button', { name: 'Settings' }).should('exist');
    cy.findByRole('button', { name: 'Toggle Fullscreen' }).should('exist');
    cy.findByRole('button', { name: '>' }).should('exist');
    cy.findByRole('button', { name: '<' }).should('exist');

    // Page one contains an image
    cy.iframe({ url: '/streamed-epub' })
      .findByRole('img', {
        name: "Alice's Adventures in Wonderland, by Lewis Carroll",
      })
      .should('exist');
  });
});
