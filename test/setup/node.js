var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.expect = chai.expect;
global.sinon = sinon;

global.slice = Array.prototype.slice;

require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../../src/') + 'cordova');
require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../../src/') + 'plugins/nl.x-services.plugins.socialsharing/www/SocialSharing');
require((process.env.APP_DIR_FOR_CODE_COVERAGE || '../../src/') + 'plugins/org.apache.cordova.splashscreen/www/splashscreen');
