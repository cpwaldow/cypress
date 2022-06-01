describe('login origamid', () => {
  it('visitar URL origamid', () => {
    cy.visit('https://www.origamid.com/');
  });
  it('pegar botão de login', () => {
    cy.get('a').contains('Login').click();
  });
  it('digitar input email', () => {
    cy.get('#username').type(Cypress.env('username'));
  });
  it('digitar input senha', () => {
    cy.get('#password').type(Cypress.env('password'));
  });
  it('acessar a conta', () => {
    cy.get('button').contains('Acessar').click();
  });
  it('sair da conta', () => {
    cy.get('a').contains('Sair').click({ force: true });
  });
  it('confirmar logout', () => {
    cy.contains('desconectar').click();
  });
});
