describe('Visual Regression Test on /reg.html', () => {
    it('checks initial page layout', () => {
      cy.visit('/regg.html'); // Make sure the path is correct
      cy.matchImageSnapshot('initial-layout'); // Takes a snapshot and compares
    });
  
    it('detects content change visually', () => {
      cy.visit('/regg.html');
      cy.get('#change-text').click(); // Simulate user interaction
      cy.matchImageSnapshot('after-click-layout'); // Compares updated layout
    });
  });
  