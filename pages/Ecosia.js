const elements = {
  body: {
    selector: 'body'
  },
  mainSearch: {
    selector: 'input[type=search]'
  },
  submitButton: {
    selector: 'button[type=submit]'
  },
  secondSearch: {
    selector: '.search-box'
  }
};

const EcosiaCommands = {
  navigateToPage(){
    return this.navigate(this.url);
  },
  assertLandingTitle(title){
    return this.waitForElementVisible('@body')
      .assert.titleContains(title);
  },
  submitSearch(value){
    return this.assert.visible('@mainSearch')
      .setValue('@mainSearch', value)
      .assert.visible('@submitButton')
      .click('@submitButton')
  },
  assertSecondSearch(){
    return this.waitForElementVisible('@secondSearch')
  }
};

module.exports = {
  url(){
    return 'https://www.ecosia.org/'
  },
  elements,
  commands: [EcosiaCommands]
};
