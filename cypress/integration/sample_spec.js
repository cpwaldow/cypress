describe('My first test', () => {
  it('Does not much!', () => {
    expect(true).to.equal(true);
  });
  it('Visits the Kitchen Sink', () => {
    cy.visit('https://github.com/cpwaldow/cypress');
  });
});
