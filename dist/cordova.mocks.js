window = typeof window === 'undefined' ? {} : window;
window.cordova = typeof window.cordova === 'undefined' ? {} : window.cordova;

window.cordova.exec = function (success, fail, className, methodName, paras) {
    if (success !== null) {
        success();
    }
};

window.facebookConnectPlugin = {

    getLoginStatus: function (s, f) {
        // Try will catch errors when SDK has not been init
        try {
            FB.getLoginStatus(function (response) {
                s(response);
            });
        } catch (error) {
            if (!f) {
                console.error(error.message);
            } else {
                f(error.message);
            }
        }
    },

    showDialog: function (options, s, f) {

        if (!options.name) {
            options.name = "";
        }
        if (!options.message) {
            options.message = "";
        }
        if (!options.caption) {
            options.caption = "";
        }
        if (!options.description) {
            options.description = "";
        }
        if (!options.href) {
            options.href = "";
        }
        if (!options.picture) {
            options.picture = "";
        }
        
        // Try will catch errors when SDK has not been init
        try {
            FB.ui({
                method: options.method,
                message: options.message,
                name: options.name,
                caption: options.caption,
                description: (
                    options.description
                ),
                href: options.href,
                picture: options.picture
            },
            function (response) {
                if (response && (response.request || !response.error_code)) {
                    s(response);
                } else {
                    f(response);
                }
            });
        } catch (error) {
            if (!f) {
                console.error(error.message);
            } else {
                f(error.message);
            }
        }
    },

    // Attach this to a UI element, this requires user interaction.
    login: function (permissions, s, f) {
        // JS SDK takes an object here but the native SDKs use array.
        var permissionObj = {};
        if (permissions && permissions.length > 0) {
            permissionObj.scope = permissions.toString();
        }
        
        FB.login(function (response) {
            if (response.authResponse) {
                s(response);
            } else {
                f(response.status);
            }
        }, permissionObj);
    },

    getAccessToken: function (s, f) {
        var response = FB.getAccessToken();
        if (!response) {
            if (!f) {
                console.error("NO_TOKEN");
            } else {
                f("NO_TOKEN");
            }
        } else {
            s(response);
        }
    },

    logEvent: function (eventName, params, valueToSum, s, f) {
        // AppEvents are not avaliable in JS.
        s();
    },

    logPurchase: function (value, currency, s, f) {
        // AppEvents are not avaliable in JS.
        s();
    },

    logout: function (s, f) {
        // Try will catch errors when SDK has not been init
        try {
            FB.logout( function (response) {
                s(response);
            });
        } catch (error) {
            if (!f) {
                console.error(error.message);
            } else {
                f(error.message);
            }
        }
    },

    api: function (graphPath, permissions, s, f) {
        // JS API does not take additional permissions
        
        // Try will catch errors when SDK has not been init
        try {
            FB.api(graphPath, function (response) {
                if (response.error) {
                    f(response);
                } else {
                    s(response);
                }
            });
        } catch (error) {
            if (!f) {
                console.error(error.message);
            } else {
                f(error.message);
            }
        }
    },

    // Browser wrapper API ONLY
    browserInit: function (appId, version) {
        if (!version) {
            version = "v2.0";
        }
        FB.init({
            appId      : appId,
            cookie     : true,
            xfbml      : true,
            version    : version
        });
    }

};
    
// Bake in the JS SDK
(function () {
    if (!window.FB) {
        console.log("launching FB SDK");
        var e = document.createElement('script');
        e.src = document.location.protocol + '//connect.facebook.net/en_US/sdk.js';
        e.async = true;
        document.getElementById('fb-root').appendChild(e);
    }
}());

// cordova = require('cordova');

function SocialSharing() {
}

// Override this method (after deviceready) to set the location where you want the iPad popup arrow to appear.
// If not overridden with different values, the popup is not used. Example:
//
//   window.plugins.socialsharing.iPadPopupCoordinates = function() {
//     return "100,100,200,300";
//   };
SocialSharing.prototype.iPadPopupCoordinates = function () {
  // left,top,width,height
  return "-1,-1,-1,-1";
};

SocialSharing.prototype.available = function (callback) {
//  cordova.exec(function (avail) {
//    callback(avail ? true : false);
//  }, null, "SocialSharing", "available", []);
};

SocialSharing.prototype.share = function (message, subject, fileOrFileArray, url, successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "share"), "SocialSharing", "share", [message, subject, this._asArray(fileOrFileArray), url]);
};

SocialSharing.prototype.shareViaTwitter = function (message, file /* multiple not allowed by twitter */, url, successCallback, errorCallback) {
//  var fileArray = this._asArray(file);
//  var ecb = this._getErrorCallback(errorCallback, "shareViaTwitter");
//  if (fileArray.length > 1) {
//    ecb("shareViaTwitter supports max one file");
//  } else {
//    cordova.exec(successCallback, ecb, "SocialSharing", "shareViaTwitter", [message, null, fileArray, url]);
//  }
};

SocialSharing.prototype.shareViaFacebook = function (message, fileOrFileArray, url, successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaFacebook"), "SocialSharing", "shareViaFacebook", [message, null, this._asArray(fileOrFileArray), url]);
};

SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback) {
//  pasteMessageHint = pasteMessageHint || "If you like you can paste a message from your clipboard";
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaFacebookWithPasteMessageHint"), "SocialSharing", "shareViaFacebookWithPasteMessageHint", [message, null, this._asArray(fileOrFileArray), url, pasteMessageHint]);
};

SocialSharing.prototype.shareViaWhatsApp = function (message, fileOrFileArray, url, successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaWhatsApp"), "SocialSharing", "shareViaWhatsApp", [message, null, this._asArray(fileOrFileArray), url]);
};

SocialSharing.prototype.shareViaSMS = function (options, phonenumbers, successCallback, errorCallback) {
//  var opts = options;
//  if (typeof options == "string") {
//    opts = {"message":options}; // for backward compatibility as the options param used to be the message
//  }
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaSMS"), "SocialSharing", "shareViaSMS", [opts, phonenumbers]);
};

SocialSharing.prototype.shareViaEmail = function (message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareViaEmail"), "SocialSharing", "shareViaEmail", [message, subject, this._asArray(toArray), this._asArray(ccArray), this._asArray(bccArray), this._asArray(fileOrFileArray)]);
};

SocialSharing.prototype.canShareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "canShareVia"), "SocialSharing", "canShareVia", [message, subject, this._asArray(fileOrFileArray), url, via]);
};

SocialSharing.prototype.canShareViaEmail = function (successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "canShareViaEmail"), "SocialSharing", "canShareViaEmail", []);
};

SocialSharing.prototype.shareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {
//  cordova.exec(successCallback, this._getErrorCallback(errorCallback, "shareVia"), "SocialSharing", "shareVia", [message, subject, this._asArray(fileOrFileArray), url, via]);
};

SocialSharing.prototype._asArray = function (param) {
  if (param === null) {
    param = [];
  } else if (typeof param === 'string') {
    param = new Array(param);
  }
  return param;
};

SocialSharing.prototype._getErrorCallback = function (ecb, functionName) {
  if (typeof ecb === 'function') {
    return ecb;
  } else {
    return function (result) {
      console.log("The injected error callback of '" + functionName + "' received: " + JSON.stringify(result));
    };
  }
};

SocialSharing.install = function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.socialsharing = new SocialSharing();
  return window.plugins.socialsharing;
};

// cordova.addConstructor(SocialSharing.install);

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
