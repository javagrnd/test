/** taking a stab @ doing this in protractor - as I have never used it before.
	Overview:
	test of a selection drop down from angular source.  available via several different implementations - choosing simple one as test case.
		additional casing for other selections can be derived from this one based on extensibility of angular system.
		items for elements on page derived from data store fields/config file and pulled into page, sourcing is assumed - rendering within page is THE test.
		failure to render will reflect either problem in code that retrieves fields or within config file that contains field info.
		tests allow for best coverage of a single simple element derived from exterior source
	Specific:
	testing a simple drop down as a POC
		drop down has relatively simple (almost binary) function
			select item --> item value revealed
			tests to be as follows:
				verify selection item present
				verify list box populated
				verify selection from list-box reveals content panel
				verify user able to select item from list
				verify selection from listbox's value revealed in content panel
				 -> last 2 could be single test
		items that populate list are pulled into it via getPoeple function, so for the population function itself - 
			this should be out of scope and done via dev unit test
			once this is done, if problems occur we then know its a problem on the page -- assuming the unit tests passed this time.
*/
// spec.js
describe('Test problem for Sr. QA Position w/ GE - decided on using Protractor', function() {
	beforeEach(function() {
		browser.get('https://ng-select.github.io/ng-select/');
	});

	it('test 1 : page loads', function() {
		expect(browser.getTitle()).toEqual('Data sources');
	});
	it('test 2 : Selection list presented', function() {
		var dropList = element(by.css('div.ng-select-container.ng-has-value'));
		expect(dropList.isPresent());
	});
	it('test 3 : Selection made from dropList reveals output frame', function() {
		var dropList = element(by.css('div.ng-select-container.ng-has-value'));
		var listSelection = element(by.id('aab561668f9d'));
		var selectionReveal = element(by.css('select-search'));
		expect(dropList.isPresent());
		expect(listSelection.isPresent());
		expect(selectionReveal.isPresent());
	});
	it('test 4 : Able to select specific person from list - drawn from data store.', function() {
		var dropList = element(by.css('div.ng-select-container.ng-has-value'));
		var dropTextbox = element(by.css('input[type="text"]'));
		var listSelection = element(by.id('a1c499869d80')).click();
		var eLsa = element(by.cssContainingText('.ng-input', 'Elsa Bradley'));
		expect(dropList.isPresent());
		expect(listSelection.isPresent());
		element(eLsa.isPresent());
	});
	it('test 5 : Value of selection from dropList verified in output frame.', function() {
		var dropList = element(by.css('div.ng-select-container.ng-has-value'));
		var dropTextbox = element(by.css('input[type="text"]'));
		var listSelection = element(by.id('a1c499869d80')).click();
		var eLsa = element(by.cssContainingText('.ng-input', 'Elsa Bradley'));
		var selectionReveal = element(by.css('select-search'));
		expect(dropList.isPresent());
		expect(listSelection.isPresent());
		element(eLsa.isPresent());
		expect(selectionReveal.isPresent());
		expect(selectionReveal.getAttribute('5a15b13cc3b9381ffcb1d6f7'));
	});
});
/** from this point on, it is just variation on theme of selecting an item and having the value returned in the desired place. */
/** this remonds me of the ruby framework I was a part of using Selenium Webdriver, but with angular its more complex & powerful.
	looking forward to working in this more and doing this on a functional UX */
