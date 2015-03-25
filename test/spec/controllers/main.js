'use strict';

(function() {
  describe('Controller: MainCtrl', function () {
    var button;

    beforeEach(function() {
      browser.get('http://localhost:9000/#/');
      button = element(by.css('.btn-search'));
    });

    describe('When the form is empty', function () {
      it('Should disable the Search button', function () {
        var attr = button.getAttribute('disabled');
        expect(attr).toBeTruthy();
      });
    });

    describe('When the user enters text', function () {
      it('Should enable the Search button', function () {
        element(by.model('username')).sendKeys('test user');
        var attr = button.getAttribute('disabled');
        expect(attr).toBeFalsy();
      });
    });

    describe('When the user submits the search', function () {
      it('Should show a result table', function () {
        element(by.model('username')).sendKeys('kevinquillen');
        button.click();
        browser.waitForAngular();

        var resultTable = element(by.css('.results'));

        expect(resultTable).toBeTruthy();
      });

      it('Should let user view details', function() {
        element(by.model('username')).sendKeys('kevinquillen');
        button.click();
        browser.waitForAngular();

        var userLink = element(by.css('#user-link'));
        userLink.click();

        expect(browser.getCurrentUrl()).toMatch('user/');
      });
    });
  });
})();
