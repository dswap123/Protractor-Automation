//Suite in Jasmine
describe('fashion cloud check elements', function() {
  // Test in Jasmine
  it('should check all elements', function() {
    // Entering application url in browser
    browser.get('http://localhost:8080');

    expect(element(by.css('.form-control.input-lg.text-center.ng-pristine.ng-valid')).isPresent()).toBe(true);
    expect(element(by.className('btn btn-primary btn-lg')).isPresent()).toBe(true);
    expect(element(by.className('jumbotron text-center')).isPresent()).toBe(true);
  
    element(by.css('.form-control.input-lg.text-center.ng-pristine.ng-valid')).sendKeys('new item');
    element(by.className('btn btn-primary btn-lg')).click();
    expect(element(by.className('ng-binding')).isPresent()).toBe(true);

  });
});
