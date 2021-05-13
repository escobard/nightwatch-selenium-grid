const elements = {
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

const EcosiaCommands = {};

module.exports = {
  url(){
    return 'https://www.ecosia.org/'
  },
  elements,
  commands: [EcosiaCommands]
};
