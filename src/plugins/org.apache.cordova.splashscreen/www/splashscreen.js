/**
 * Mock version of the 'org.apache.cordova.splashscreen' plugin.
 * 
 * @author Baptiste GAILLARD (baptiste.gaillard@gomoob.com)
 * @see https://github.com/apache/cordova-plugin-splashscreen
 */

// If no 'window.navigator' object exists we create one
window.navigator = window.navigator ? window.navigator : {};

// Create or overwrites the 'window.navigator.splashscreen' object
window.navigator.splashscreen = {

    /**
     * Function used to hide the Apache Cordova / Adobe Phonegap splash screen.
     * 
     * @return {Boolean} True if the call is successful, false otherwise.
     */
    hide : function() {
        
        return true;
        
    },
    
    /**
     * Function used to show the Apache Cordova / Adobe Phonegap splash screen.
     * 
     * @return {Boolean} True is the call is successful, false otherwise.
     */
    show : function() {
        
        return true;
        
    }
                       
};