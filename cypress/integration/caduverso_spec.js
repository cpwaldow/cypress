describe('HTML Caduverso', () => {
  it('abrir o html', () => {
    cy.visit('index.html');
  });
  it('Conferir se existe uma tag H1 com o id `title` e com o texto `Caduverso`', () => {
    cy.get('h1').should('be.visible');
    cy.get('#title').should('be.visible');
    cy.get('#title').contains('Caduverso');
    cy.get('h1').contains('Caduverso');
  });
});
