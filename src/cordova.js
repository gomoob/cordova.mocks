window = typeof window === 'undefined' ? {} : window;
window.cordova = typeof window.cordova === 'undefined' ? {} : window.cordova;

window.cordova.exec = function (success, fail, className, methodName, paras) {
    if (success !== null) {
        success();
    }
};

// A configuration object which is dedicated to the 'cordova.mocks' library
window.cordova.__mocks = {

    /**
     * A boolean used to simulate the start and end call Blackberry buttons.
     *
     * @var {Boolean}
     */
    CALLING : false,

    /**
     * A boolean used to simulate a pause state for the application.
     *
     * @var {Boolean}
     */
    PAUSED : false

};

// Cordova lifecycle events.
// @see http://docs.phonegap.com/en/4.0.0/cordova_events_events.md.html
document.onkeypress = function(event) {

    event = event || window.event;

    var code = null;

    // Internet Explorer
    if(event.which == null) {

        code = event.keyCode;

    }

    // Other browsers
    else if (event.which != 0 && event.charCode != 0) {

        code = event.which;

    }

    // Special keys
    else {

        return null;

    }

    switch(code) {

        // Space key, Cordova 'pause' / 'resume' events
        case 32:

            // If the application is in pause mode we resume it
            if(window.cordova.__mocks.PAUSED) {

                document.dispatchEvent(new Event('resume'));
                window.cordova.__mocks.PAUSED = false;

            }

            // Otherwise if the application is in resume mode we pause it
            else {

                document.dispatchEvent(new Event('pause'));
                window.cordova.__mocks.PAUSED = true;

            }

            break;

        // + Key, Cordova 'volumeupbutton' event
        case 43:
            document.dispatchEvent(new Event('volumeupbutton'));
            break;

         // - Key, Cordova 'volumedownbutton' event
        case 45:
            document.dispatchEvent(new Event('volumedownbutton'));
            break;

        // B Key, Cordova 'backbutton' event
        case 98:
            document.dispatchEvent(new Event('backbutton'));
            break;

        // C Key, Cordova 'startcallbutton' event
        case 99:

            // If the application is in calling mode we resume it
            if(window.cordova.__mocks.CALLING) {

                document.dispatchEvent(new Event('endcallbutton'));
                window.cordova.__mocks.CALLING = false;

            }

            // Otherwise if the application is not in calling mode we place it in calling mode
            else {

                document.dispatchEvent(new Event('startcallbutton'));
                window.cordova.__mocks.CALLING = true;

            }

            break;

        // M Key, Cordova 'backbutton' event
        case 109:
            document.dispatchEvent(new Event('menubutton'));
            break;

        // S Key, Cordova 'backbutton' event
        case 115:
            document.dispatchEvent(new Event('searchbutton'));
            break;

        default:
            break;
    }

    return false;

};