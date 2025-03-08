describe('Multi-Page Navigation and Form Test', () => {
  
    beforeEach(() => {
      // Visit the base URL before each test
      cy.visit('/');
    });
  
    it('Checks for "Welcome Home" on the Home page', () => {
      cy.contains('Welcome Home'); // Verifies that the text exists on the homepage
    });
  
    it('Navigates to the About page and checks for "Jane Designer"', () => {
      cy.contains('About').click();
      cy.url().should('include', '/about.html');
      cy.contains('Jane').should('be.visible'); // Verifies that "Jane" exists
      cy.contains('Designer').should('be.visible'); // Verifies that "Designer" exists
    });
  
    it('Navigates to the Form page, fills it out, and submits', () => {
      cy.contains('Form').click();
      cy.url().should('include', '/form.html');
  
      // Fill out the form
      cy.get('#name').type('John Doe');
      cy.get('#email').type('johndoe@example.com');
      cy.get('#message-text').type('Hello, this is a test message.');
  
      // Submit the form
      cy.get('button[type="submit"]').click();
  
      // Verify success message
      cy.contains('Thank you, John Doe!');
    });
  });
  