describe('Ecosia', function() {
  // https://nightwatchjs.org/guide/running-tests/test-tags.html
  this.tags = ['smoke'];
  it('demo test', function(browser) {
    let ecosia = browser.page.Ecosia();
    ecosia.navigateToPage();
    ecosia.assertLandingTitle('Ecosia');
    ecosia.submitSearch('Nightwatch');
    browser.end();
  });

});
