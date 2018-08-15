exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
    },
  framework: 'jasmine',
//  specs: ['./specs/deleteList.js'],
  specs: ['./specs/addList.js','./specs/validateElements.js','./specs/deleteList.js'],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
