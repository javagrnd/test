exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['spec.js'],
	capabilities: {
	  browserName: 'chrome',
	  chromeOptions: {
	     args: [ "--disable-gpu", "--window-size=1024,800" ]
	   }
	}
};
/**
#"--headless", 
*/