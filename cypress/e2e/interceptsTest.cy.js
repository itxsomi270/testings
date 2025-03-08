describe('Cat Facts Page UI and API Tests', () => {
    beforeEach(() => {
      cy.visit('/users.html'); // No need to add full URL since baseURL is set
    });
  
    it('Checks if the Cat Facts page loads correctly', () => {
      cy.contains('🐾 Cat Facts Collection 🐾').should('be.visible');
    });
  
    it('Mocks API Response and Checks Displayed Facts', () => {
      cy.intercept('GET', '/facts?limit=10', {  // Base URL will automatically prepend
        statusCode: 200,
        body: {
          data: [
            { fact: 'Cats sleep 70% of their lives.' },
            { fact: 'A group of cats is called a clowder.' },
            { fact: 'Cats can rotate their ears 180 degrees.' }
          ]
        }
      }).as('mockCatFacts');
  
      cy.reload();
      cy.wait('@mockCatFacts');
  
      cy.contains('Cats sleep 70% of their lives.').should('be.visible');
      cy.contains('A group of cats is called a clowder.').should('be.visible');
      cy.contains('Cats can rotate their ears 180 degrees.').should('be.visible');
    });
  
    it('Checks if cards are displayed correctly', () => {
      cy.get('.fact-card').should('have.length.at.least', 1);
    });
  
    it('Handles API Failure Gracefully', () => {
      cy.intercept('GET', '/facts?limit=10', {
        statusCode: 500
      }).as('failedRequest');
  
      cy.reload();
      cy.wait('@failedRequest');
  
      cy.contains('Failed to load cat facts. Try again!').should('be.visible');
    });
  });
  