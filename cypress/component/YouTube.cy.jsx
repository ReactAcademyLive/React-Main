const { default: Video } = require('../../src/data/videos/Video');

describe('Video.cy.js', () => {
  it('playground', () => {
    cy.mount(<Video id='xnpzo0v3Ptk' width='200' />);
  });
});
