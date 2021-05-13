const elements = {};

const EcosiaCommands = {};

module.exports = {
  url(){
    return this.api.launch_url
  },
  elements,
  commands: [EcosiaCommands]
};
