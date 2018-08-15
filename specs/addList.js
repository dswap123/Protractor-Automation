//Suite in Jasmine
describe('fashion cloud todo list', function() {
  // Test in Jasmine
  it('should add a todo list', function() {
    // Entering application url in browser
    browser.get('http://localhost:8080');
    // Enter text under TODO input field
    element(by.css('.form-control.input-lg.text-center.ng-pristine.ng-valid')).sendKeys('add milk');
    // Clicks on 'Add' button
    element(by.className('btn btn-primary btn-lg')).click();
    // Getting last added item
    let last = element.all(by.className('ng-binding')).last();
    expect(last.getText()).toBe('add milk');
  });
});
