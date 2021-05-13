describe('Ecosia', function() {
  // https://nightwatchjs.org/guide/running-tests/test-tags.html
  this.tags = ['smoke'];
  it('demo test', function(browser) {
    browser
      .url('https://www.ecosia.org/')
      .waitForElementVisible('body')
      .assert.titleContains('Ecosia')
      .assert.visible('input[type=search]')
      .setValue('input[type=search]', 'nightwatch')
      .assert.visible('button[type=submit]')
      .click('button[type=submit]')
      .assert.visible('.search-box')
      .end();
  });

});
