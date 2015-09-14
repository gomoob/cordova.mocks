/**
 * Mock version of the 'org.apache.cordova.camera' plugin.
 * 
 * @author Simon BAUDRY (simon.baudry@gomoob.com)
 * @see https://github.com/apache/cordova-plugin-camera
 */
function Camera() {}

/**
 * Gets a picture from source defined by "options.sourceType", and returns the
 * image as defined by the "options.destinationType" option.

 * The defaults are sourceType=CAMERA and destinationType=FILE_URI.
 *
 * @param {Function} successCallback
 * @param {Function} errorCallback
 * @param {Object} options
 */
Camera.prototype.getPicture = function(successCallback, errorCallback, options) {
    
    successCallback('http://img.verygoodmoment.com/event/50/party/101808/xl-2015-02-23-19:05:33.jpg');
    
};

Camera.prototype.cleanup = function(successCallback, errorCallback) {
    
    successCallback();
    
};

navigator.camera = new Camera();