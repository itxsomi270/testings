describe('Form Submission Test', () => {
  
  it('fills and submits the form', () => {
    cy.visit('http://localhost:8080/form.html'); // Update this if needed

    // Fill in the form fields
    cy.get('#name').type('John Doe');
    cy.get('#email').type('johndoe@example.com');
    cy.get('#message-text').type('This is a test message.');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Verify the success message
    cy.get('#message').should('contain.text', 'Thank you, John Doe! Your message has been received.');
  });
});
