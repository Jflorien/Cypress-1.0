export const search = () => {
    cy.get('a').each(($a) => {
        const href = $a.prop('href');
        if (href && href.startsWith('http') && href.includes('target=_blank')) {
            $a.removeAttr('target');
            $a.attr('rel', 'noopener noreferrer');
            cy.visit(href);
        }
    });
    cy.window().then((win) => {
        const orig = win.open
        win.open = function (url, target, features) {
            return orig.call(this, url, '_self', features)
        }
    })

    cy.wait(1000);
    cy.get('div.sc-gafju0-0 a:nth-child(3)')
        .should('have.attr', 'target', '_blank')
        .invoke('removeAttr', 'target')
        .click({ force: true });
}