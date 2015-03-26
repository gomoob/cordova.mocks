window = typeof window === 'undefined' ? {} : window;
window.cordova = typeof window.cordova === 'undefined' ? {} : window.cordova;

window.cordova.exec = function (success, fail, className, methodName, paras) {
    if (success !== null) {
        success();
    }
};


// Cordova Facebook Connect Plugin
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


// Cordova Social Sharing Plugin
/**
 * Mock version of the 'nl.x-services.plugins.socialsharing' plugin.
 * 
 * @author Baptiste GAILLARD (baptiste.gaillard@gomoob.com)
 * @see https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin
 * @version 4.3.13
 */
function SocialSharing() {}

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
  cordova.exec(function (avail) {
    callback(avail ? true : false);
  }, null, "SocialSharing", "available", []);
};

SocialSharing.prototype.share = function (message, subject, fileOrFileArray, url, successCallback, errorCallback) {

    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "share"),
        "SocialSharing",
        "share",
        [message, subject, this._asArray(fileOrFileArray), url]
    );
    */

};

SocialSharing.prototype.shareViaTwitter = function (message, file /* multiple not allowed by twitter */, url, successCallback, errorCallback) {
    
    // Original code
    /*
    var fileArray = this._asArray(file);
    var ecb = this._getErrorCallback(errorCallback, "shareViaTwitter");
    if (fileArray.length > 1) {
        ecb("shareViaTwitter supports max one file");
    } else {
        cordova.exec(successCallback, ecb, "SocialSharing", "shareViaTwitter", [message, null, fileArray, url]);
    }
    */

};

SocialSharing.prototype.shareViaFacebook = function (message, fileOrFileArray, url, successCallback, errorCallback) {
    
    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "shareViaFacebook"),
        "SocialSharing",
        "shareViaFacebook",
        [message, null, this._asArray(fileOrFileArray), url]
    );
    */

};

SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, fileOrFileArray, url, pasteMessageHint, successCallback, errorCallback) {

    // Original code
    /*
    pasteMessageHint = pasteMessageHint || "If you like you can paste a message from your clipboard";
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "shareViaFacebookWithPasteMessageHint"),
        "SocialSharing", "shareViaFacebookWithPasteMessageHint",
        [message, null, this._asArray(fileOrFileArray), url, pasteMessageHint]
    );
    */

};

SocialSharing.prototype.shareViaWhatsApp = function (message, fileOrFileArray, url, successCallback, errorCallback) {
    
    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "shareViaWhatsApp"), 
        "SocialSharing", 
        "shareViaWhatsApp", 
        [message, null, this._asArray(fileOrFileArray), url]
    );
    */

};

SocialSharing.prototype.shareViaSMS = function (options, phonenumbers, successCallback, errorCallback) {

    // Original code
    /*
    var opts = options;
    if (typeof options == "string") {
            opts = {"message":options}; // for backward compatibility as the options param used to be the message
    }
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "shareViaSMS"),
        "SocialSharing",
        "shareViaSMS",
        [opts, phonenumbers]
    );
    */

};

SocialSharing.prototype.shareViaEmail = function (message, subject, toArray, ccArray, bccArray, fileOrFileArray, successCallback, errorCallback) {
    
    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "shareViaEmail"),
        "SocialSharing",
        "shareViaEmail",
        [
            message,
            subject,
            this._asArray(toArray),
            this._asArray(ccArray),
            this._asArray(bccArray),
            this._asArray(fileOrFileArray)
        ]
    );
    */
    
};

SocialSharing.prototype.canShareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {

    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "canShareVia"),
        "SocialSharing",
        "canShareVia",
        [
            message,
            subject,
            this._asArray(fileOrFileArray),
            url,
            via
        ]
    );
    */
    
    // Mock code
    successCallback('OK');

};

SocialSharing.prototype.canShareViaEmail = function (successCallback, errorCallback) {

    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "canShareViaEmail"),
        "SocialSharing",
        "canShareViaEmail",
        []
    );
    */
    
    // Mock code
    successCallback('OK');

};

SocialSharing.prototype.shareVia = function (via, message, subject, fileOrFileArray, url, successCallback, errorCallback) {

    // Original code
    /*
    cordova.exec(
        successCallback,
        this._getErrorCallback(errorCallback, "shareVia"),
        "SocialSharing",
        "shareVia",
        [message, subject, this._asArray(fileOrFileArray), url, via]
    );
    */

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

/*
SocialSharing.install = function () {
*/
    if (!window.plugins) {
        window.plugins = {};
    }

    window.plugins.socialsharing = new SocialSharing();

/*
    return window.plugins.socialsharing;

};
*/

// Cordova Contacts Plugin
/**
 * Mock version of the 'org.apache.cordova.splashscreen' plugin.
 * 
 * @author Baptiste GAILLARD (baptiste.gaillard@gomoob.com)
 * @see https://github.com/apache/cordova-plugin-splashscreen
 */

// If no 'window.navigator' object exists we create one
window.navigator = window.navigator ? window.navigator : {};

// Create or overwrites the 'window.navigator.contacts' object
window.navigator.contacts = {

    /**
     * This function creates a new contact, but it does not persist the contact
     * to device storage. To persist the contact to device storage, invoke
     * contact.save().
     * @param properties an object whose properties will be examined to create a new Contact
     * @returns new Contact object
     */
    create : function(properties) {
        
    },

    /**
     * Returns an array of Contacts matching the search criteria.
     * @param fields that should be searched
     * @param successCB success callback
     * @param errorCB error callback
     * @param {ContactFindOptions} options that can be applied to contact searching
     * @return array of Contacts matching search criteria
     */
    find : function(fields, successCB, errorCB, options) {
        
        // The test data is build from the IMDB Most Famous Females / Males
        // @see : http://www.imdb.com/search/name?gender=male,female&sort=starmeter,asc
        // 
        // The 50 first contacts have the following characteristics
        //  - All their properties are filled
        //  - They have 3 email addresses
        //    - The 2 first ones are the same, this is to test de-duplication
        //    - The third email address is different from the 2 first ones
        //  - They have 4 organizations
        //    - The 2 first ones are the same, this is to test de-duplication
        //    - The third organization is different from the 2 first ones and has not 'title'
        //    - The fourth organization is different from the 3 first ones and has a 'title'
        // 
        // The 50 last contacts have the following characteristics
        //  - Null values for the following properties
        //    - nickname
        //    - phoneNumbers
        //    - emails
        //    - addresses
        //    - ims
        //    - organizations
        //    - birthday
        //    - photos
        //    - categories
        //    - urls
        successCB(
            [
                // Hayley Atwell
                {
                    'id' : '1',
                    'rawId' : '1',
                    'displayName' : 'Hayley Atwell',
                    'name' : {
                        'familyName' : 'Atwell',
                        'formatted' : 'Hayley Atwell',
                        'givenName' : 'Hayley'
                    },
                    'nickname' : null,
                    'phoneNumbers' : null,
                    'emails' : [
                        {
                            'type' : 'other',
                            'value' : 'hayley.atwell@contacts.com',
                            'id' : '1',
                            'pref' : false
                        },
                        {
                            'type' : 'other',
                            'value' : 'hayley.atwell@contacts.com',
                            'id' : '2',
                            'pref' : false
                        },
                        {
                            'type' : 'other',
                            'value' : 'hayley.atwell2@contacts.com',
                            'id' : '3',
                            'pref' : false
                        }
                    ],
                    'addresses' : null,
                    'ims' : null,
                    'organizations' : [
                        {
                            'type' : 'other',
                            'id' : '1',
                            'pref' : false,
                            'name' : 'Hayley Atwell Organization 1'
                        },
                        {
                            'type' : 'other',
                            'id' : '2',
                            'pref' : false,
                            'name' : 'Hayley Atwell Organization 1'
                        },
                        {
                            'type' : 'other',
                            'id' : '3',
                            'pref' : false,
                            'name' : 'Hayley Atwell Organization 2'
                        },
                        {
                            'type' : 'other',
                            'id' : '4',
                            'pref' : false,
                            'name' : 'Hayley Atwell Organization 3',
                            'title' : 'Hayley Atwell Title'
                        }
                    ],
                    'birthday' : null,
                    'note' : '',
                    'photos' : null,
                    'categories' : null,
                    'urls' : null
                },
                
                // Chloë Grace Moretz
                {
                    'id' : '2',
                    'rawId' : '2',
                    'displayName' : 'Chloë Grace Moretz',
                    'name' : {
                        'familyName' : 'Grace Moretz',
                        'formatted' : 'Chloë Grace Moretz',
                        'givenName' : 'Chloë'
                    },
                    'nickname' : null,
                    'phoneNumbers' : null,
                    'emails' : [
                        {
                            'type' : 'other',
                            'value' : 'chloe.grace.moretz@contacts.com',
                            'id' : '4',
                            'pref' : false
                        },
                        {
                            'type' : 'other',
                            'value' : 'chloe.grace.moretz@contacts.com',
                            'id' : '5',
                            'pref' : false
                        },
                        {
                            'type' : 'other',
                            'value' : 'chloe.grace.moretz2@contacts.com',
                            'id' : '6',
                            'pref' : false
                        }
                    ],
                    'addresses' : null,
                    'ims' : null,
                    'organizations' : [
                        {
                            'type' : 'other',
                            'id' : '5',
                            'pref' : false,
                            'name' : 'Chloë Grace Moretz Organization 1'
                        },
                        {
                            'type' : 'other',
                            'id' : '6',
                            'pref' : false,
                            'name' : 'Chloë Grace Moretz Organization 1'
                        },
                        {
                            'type' : 'other',
                            'id' : '7',
                            'pref' : false,
                            'name' : 'Chloë Grace Moretz Organization 2'
                        },
                        {
                            'type' : 'other',
                            'id' : '8',
                            'pref' : false,
                            'name' : 'Chloë Grace Moretz Organization 3',
                            'title' : 'Chloë Grace Moretz Title'
                        }
                    ],
                    'birthday' : null,
                    'note' : '',
                    'photos' : null,
                    'categories' : null,
                    'urls' : null
                },
                
                // Shailene Woodley
                {
                    'id' : '3',
                    'rawId' : '3',
                    'displayName' : 'Shailene Woodley',
                    'name' : {
                        'familyName' : 'Woodley',
                        'formatted' : 'Shailene Woodley',
                        'givenName' : 'Shailene'
                    },
                    'nickname' : null,
                    'phoneNumbers' : null,
                    'emails' : [
                        {
                            'type' : 'other',
                            'value' : 'shailene.woodley@contacts.com',
                            'id' : '7',
                            'pref' : false
                        },
                        {
                            'type' : 'other',
                            'value' : 'shailene.woodley@contacts.com',
                            'id' : '8',
                            'pref' : false
                        },
                        {
                            'type' : 'other',
                            'value' : 'shailene.woodley2@contacts.com',
                            'id' : '9',
                            'pref' : false
                        }
                    ],
                    'addresses' : null,
                    'ims' : null,
                    'organizations' : [
                        {
                            'type' : 'other',
                            'id' : '9',
                            'pref' : false,
                            'name' : 'Shailene Woodley Organization 1'
                        },
                        {
                            'type' : 'other',
                            'id' : '10',
                            'pref' : false,
                            'name' : 'Shailene Woodley Organization 1'
                        },
                        {
                            'type' : 'other',
                            'id' : '11',
                            'pref' : false,
                            'name' : 'Shailene Woodley Organization 2'
                        },
                        {
                            'type' : 'other',
                            'id' : '12',
                            'pref' : false,
                            'name' : 'Shailene Woodley Organization 3',
                            'title' : 'Shailene Woodley Title'
                        }
                    ],
                    'birthday' : null,
                    'note' : '',
                    'photos' : null,
                    'categories' : null,
                    'urls' : null
                }
            ]
        );
        
    },
    
    /**
     * This function picks contact from phone using contact picker UI
     * @returns new Contact object
     */
    pickContact: function (successCB, errorCB) {
        
    }

};

/**
* Contains information about a single contact.
* @constructor
* @param {DOMString} id unique identifier
* @param {DOMString} displayName
* @param {ContactName} name
* @param {DOMString} nickname
* @param {Array.<ContactField>} phoneNumbers array of phone numbers
* @param {Array.<ContactField>} emails array of email addresses
* @param {Array.<ContactAddress>} addresses array of addresses
* @param {Array.<ContactField>} ims instant messaging user ids
* @param {Array.<ContactOrganization>} organizations
* @param {DOMString} birthday contact's birthday
* @param {DOMString} note user notes about contact
* @param {Array.<ContactField>} photos
* @param {Array.<ContactField>} categories
* @param {Array.<ContactField>} urls contact's web sites
*/
window.Contact = function (id, displayName, name, nickname, phoneNumbers, emails, addresses,
    ims, organizations, birthday, note, photos, categories, urls) {
    this.id = id || null;
    this.rawId = null;
    this.displayName = displayName || null;
    this.name = name || null; // ContactName
    this.nickname = nickname || null;
    this.phoneNumbers = phoneNumbers || null; // ContactField[]
    this.emails = emails || null; // ContactField[]
    this.addresses = addresses || null; // ContactAddress[]
    this.ims = ims || null; // ContactField[]
    this.organizations = organizations || null; // ContactOrganization[]
    this.birthday = birthday || null;
    this.note = note || null;
    this.photos = photos || null; // ContactField[]
    this.categories = categories || null; // ContactField[]
    this.urls = urls || null; // ContactField[]
};

/**
* Removes contact from device storage.
* @param successCB success callback
* @param errorCB error callback
*/
window.Contact.prototype.remove = function(successCB, errorCB) {};

/**
* Creates a deep copy of this Contact.
* With the contact ID set to null.
* @return copy of this Contact
*/
window.Contact.prototype.clone = function() {};

/**
* Persists contact to device storage.
* @param successCB success callback
* @param errorCB error callback
*/
window.Contact.prototype.save = function(successCB, errorCB) {};

/**
* Contact address.
* @constructor
* @param {DOMString} id unique identifier, should only be set by native code
* @param formatted // NOTE: not a W3C standard
* @param streetAddress
* @param locality
* @param region
* @param postalCode
* @param country
*/

window.ContactAddress = function(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
    this.id = null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
    this.type = type || null;
    this.formatted = formatted || null;
    this.streetAddress = streetAddress || null;
    this.locality = locality || null;
    this.region = region || null;
    this.postalCode = postalCode || null;
    this.country = country || null;
};

/**
 *  ContactError.
 *  An error code assigned by an implementation when an error has occurred
 * @constructor
 */
window.ContactError = function(err) {
    this.code = (typeof err != 'undefined' ? err : null);
};

/**
 * Error codes
 */
window.ContactError.UNKNOWN_ERROR = 0;
window.ContactError.INVALID_ARGUMENT_ERROR = 1;
window.ContactError.TIMEOUT_ERROR = 2;
window.ContactError.PENDING_OPERATION_ERROR = 3;
window.ContactError.IO_ERROR = 4;
window.ContactError.NOT_SUPPORTED_ERROR = 5;
window.ContactError.PERMISSION_DENIED_ERROR = 20;

/**
* Generic contact field.
* @constructor
* @param {DOMString} id unique identifier, should only be set by native code // NOTE: not a W3C standard
* @param type
* @param value
* @param pref
*/
window.ContactField = function(type, value, pref) {
    this.id = null;
    this.type = (type && type.toString()) || null;
    this.value = (value && value.toString()) || null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
};
    // Possible field names for various platforms.
    // Some field names are platform specific

    var fieldType = {
        addresses:      "addresses",
        birthday:       "birthday",
        categories:     "categories",
        country:        "country",
        department:     "department",
        displayName:    "displayName",
        emails:         "emails",
        familyName:     "familyName",
        formatted:      "formatted",
        givenName:      "givenName",
        honorificPrefix: "honorificPrefix",
        honorificSuffix: "honorificSuffix",
        id:             "id",
        ims:            "ims",
        locality:       "locality",
        middleName:     "middleName",
        name:           "name",
        nickname:       "nickname",
        note:           "note",
        organizations:  "organizations",
        phoneNumbers:   "phoneNumbers",
        photos:         "photos",
        postalCode:     "postalCode",
        region:         "region",
        streetAddress:  "streetAddress",
        title:          "title",
        urls:           "urls"
    };

/**
 * ContactFindOptions.
 * @constructor
 * @param filter used to match contacts against
 * @param multiple boolean used to determine if more than one contact should be returned
 */

window.ContactFindOptions = function(filter, multiple, desiredFields) {
    this.filter = filter || '';
    this.multiple = (typeof multiple != 'undefined' ? multiple : false);
    this.desiredFields = typeof desiredFields != 'undefined' ? desiredFields : [];
};

/**
* Contact organization.
* @constructor
* @param {DOMString} id unique identifier, should only be set by native code // NOTE: not a W3C standard
* @param name
* @param dept
* @param title
* @param startDate
* @param endDate
* @param location
* @param desc
*/

window.ContactOrganization = function(pref, type, name, dept, title) {
    this.id = null;
    this.pref = (typeof pref != 'undefined' ? pref : false);
    this.type = type || null;
    this.name = name || null;
    this.department = dept || null;
    this.title = title || null;
};


// Cordova Splashscreen Plugin
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

// Cordova Pushwoosh Plugin 
function PushNotification() {}

// Call this to register for push notifications and retreive a push Token
PushNotification.prototype.registerDevice = function(success, fail) {
    if(typeof callback === 'function') {
        success('push_token');   
    }
};

// Call this to set tags for the device
PushNotification.prototype.setTags = function(config, success, fail) {
    if(typeof callback === 'function') {
        success('push_token');
    }
};

// Call this to get push token if it is available
PushNotification.prototype.getPushToken = function(success) {
    if(typeof callback === 'function') {
        success('push_token');
    }
};

// Call this to get Pushwoosh HWID used for communications with Pushwoosh API
PushNotification.prototype.getPushwooshHWID = function(success) {
    if(typeof callback === 'function') {
        success('pushwoosh_hwid');   
    }
};

// Call this first thing with your Pushwoosh App ID (see example)
PushNotification.prototype.onDeviceReady = function(config) {
    
};

// Call this to send geo location for the device
PushNotification.prototype.sendLocation = function(config, success, fail) {
    if(typeof callback === 'function') {
        success('push_token');
    }
};

// Call this to get tags for the device
PushNotification.prototype.getTags = function(success, fail) {
    if(typeof callback === 'function') {
        success({'device_model' : 'iPhone 3.1'});   
    }
};

PushNotification.prototype.unregisterDevice = function(success, fail) {
    if(typeof callback === 'function') {
        success('push_token');   
    }
};

// Enable Geozones for your Pushwoosh app to be able to use these
PushNotification.prototype.startLocationTracking = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

PushNotification.prototype.stopLocationTracking = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//Android Only----
//config params: {msg:"message", seconds:30, userData:"optional"}
PushNotification.prototype.createLocalNotification = function(config, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

PushNotification.prototype.clearLocalNotification = function() {
    
};

PushNotification.prototype.clearNotificationCenter = function() {
    
};

//advanced background task to track device position and not drain the battery
//deprecated, use startLocationTracking and stopLocationTracking
PushNotification.prototype.startGeoPushes = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

PushNotification.prototype.stopGeoPushes = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//advanced background task to track device position and not drain the battery
PushNotification.prototype.startBeaconPushes = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

PushNotification.prototype.stopBeaconPushes = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//Android only, let the plugin know that the app went to background mode (or vise versa)
PushNotification.prototype.setBeaconBackgroundMode = function(on, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//sets multi notification mode on
PushNotification.prototype.setMultiNotificationMode = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//sets single notification mode
PushNotification.prototype.setSingleNotificationMode = function(success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//type: 0 default, 1 no sound, 2 always
PushNotification.prototype.setSoundType = function(type, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//type: 0 default, 1 no vibration, 2 always
PushNotification.prototype.setVibrateType = function(type, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

PushNotification.prototype.setLightScreenOnNotification = function(on, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//set to enable led blinking when notification arrives and display is off
PushNotification.prototype.setEnableLED = function(on, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};
//set led color
PushNotification.prototype.setColorLED = function(color, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};
//{goal:'name', count:3} (count is optional)
PushNotification.prototype.sendGoalAchieved = function(config, success, fail) {
    if(typeof callback === 'function') {
        success();   
    }
};

//Android Only. Gets push history, returns array
PushNotification.prototype.getPushHistory = function(success) {
    if(typeof callback === 'function') {
        success();   
    }
};

//Android Only. Clears push history
PushNotification.prototype.clearPushHistory = function() {
  
};

//Android End----

//iOS only----
// Call this to get a detailed status of remoteNotifications
PushNotification.prototype.getRemoteNotificationStatus = function(callback) {
    if(typeof callback === 'function') {
        callback();   
    }
};

// Call this to set the application icon badge
PushNotification.prototype.setApplicationIconBadgeNumber = function(badgeNumber, callback) {
    if(typeof callback === 'function') {
        callback();   
    }
};

// Call this to clear all notifications from the notification center
PushNotification.prototype.cancelAllLocalNotifications = function(callback) {
    if(typeof callback === 'function') {
        callback();   
    }
};
//iOS End----

// Event spawned when a notification is received while the application is active
PushNotification.prototype.notificationCallback = function(notification) {
    var ev = document.createEvent('HTMLEvents');
    ev.notification = notification;
    ev.initEvent('push-notification', true, true, arguments);
    document.dispatchEvent(ev);
};

if (!window.plugins) {
    window.plugins = {};
}

window.plugins.pushNotification = new PushNotification();


// Cordova Google Analytics Plugin
function UniversalAnalyticsPlugin() {}

UniversalAnalyticsPlugin.prototype.startTrackerWithId = function(id, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

UniversalAnalyticsPlugin.prototype.setUserId = function(id, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

/* enables verbose logging */
UniversalAnalyticsPlugin.prototype.debugMode = function(success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

UniversalAnalyticsPlugin.prototype.trackView = function(screen, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

UniversalAnalyticsPlugin.prototype.addCustomDimension = function(key, value, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

UniversalAnalyticsPlugin.prototype.trackEvent = function(category, action, label, value, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

/**
 * https://developers.google.com/analytics/devguides/collection/android/v3/exceptions
 */
UniversalAnalyticsPlugin.prototype.trackException = function(description, fatal, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

UniversalAnalyticsPlugin.prototype.trackTiming = function(category, intervalInMilliseconds, name, label, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

/* Google Analytics e-Commerce Tracking */
/* https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce */
UniversalAnalyticsPlugin.prototype.addTransaction = function(transactionId, affiliation, revenue, tax, shipping, currencyCode, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

UniversalAnalyticsPlugin.prototype.addTransactionItem = function(transactionId, name ,sku, category, price, quantity, currencyCode, success, error) {
    if(typeof callback === 'function') {
        success();   
    }
};

window.analytics = new UniversalAnalyticsPlugin();


// Cordova Media Capture Plugin
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/


/**
 * The Capture interface exposes an interface to the camera and microphone of the hosting device.
 */
function Capture() {
    this.supportedAudioModes = [];
    this.supportedImageModes = [];
    this.supportedVideoModes = [];
}

/**
 * Launch audio recorder application for recording audio clip(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureAudioOptions} options
 */
Capture.prototype.captureAudio = function(successCallback, errorCallback, options){
    if(typeof successCallback === 'function') {
        var mediaFiles = [];
            
        // TODO
        
        mediaFiles.push(mediaFile);
        
        successCallback(mediaFiles);   
    }
};

/**
 * Launch camera application for taking image(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureImageOptions} options
 */
Capture.prototype.captureImage = function(successCallback, errorCallback, options){
    if(typeof successCallback === 'function') {
        
        var mediaFiles = [],
        mediaFile = {
            name: "xl-2015-02-23-19:05:33.jpg",
            localURL: "http://img.verygoodmoment.com/event/50/party/101808/xl-2015-02-23-19:05:33.jpg",
            type: "video/quicktime",
            lastModifiedDate: 1401295725000,
            size: 201139,
            start: 0,
            end: 0,
            fullPath: "http://img.verygoodmoment.com/event/50/party/101808/xl-2015-02-23-19:05:33.jpg"
        };
        
        mediaFiles.push(mediaFile);
        
        successCallback(mediaFiles); 
    }
};

/**
 * Launch device camera application for recording video(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureVideoOptions} options
 */
Capture.prototype.captureVideo = function(successCallback, errorCallback, options){
    if(typeof successCallback === 'function') {

        var mediaFiles = [];
        
        // TODO
        
        mediaFiles.push(mediaFile);
        
        successCallback();   
    }
};

if (!navigator.device) {
    navigator.device = {};
}
navigator.device.capture = new Capture();
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Encapsulates all audio capture operation configuration options.
 */
window.CaptureAudioOptions = function(){
    // Upper limit of sound clips user can record. Value must be equal or greater than 1.
    this.limit = 1;
    // Maximum duration of a single sound clip in seconds.
    this.duration = 0;
};

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * The CaptureError interface encapsulates all errors in the Capture API.
 */
window.CaptureError = function(c) {
   this.code = c || null;
};

// Camera or microphone failed to capture image or sound.
window.CaptureError.CAPTURE_INTERNAL_ERR = 0;
// Camera application or audio capture application is currently serving other capture request.
window.CaptureError.CAPTURE_APPLICATION_BUSY = 1;
// Invalid use of the API (e.g. limit parameter has value less than one).
window.CaptureError.CAPTURE_INVALID_ARGUMENT = 2;
// User exited camera application or audio capture application before capturing anything.
window.CaptureError.CAPTURE_NO_MEDIA_FILES = 3;
// The requested capture operation is not supported.
window.CaptureError.CAPTURE_NOT_SUPPORTED = 20;

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Encapsulates all image capture operation configuration options.
 */
window.CaptureImageOptions = function(){
    // Upper limit of images user can take. Value must be equal or greater than 1.
    this.limit = 1;
};

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Encapsulates all video capture operation configuration options.
 */
window.CaptureVideoOptions = function(){
    // Upper limit of videos user can record. Value must be equal or greater than 1.
    this.limit = 1;
    // Maximum duration of a single video clip in seconds.
    this.duration = 0;
};

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Encapsulates a set of parameters that the capture device supports.
 */
window.ConfigurationData = function() {
    // The ASCII-encoded string in lower case representing the media type.
    this.type = null;
    // The height attribute represents height of the image or video in pixels.
    // In the case of a sound clip this attribute has value 0.
    this.height = 0;
    // The width attribute represents width of the image or video in pixels.
    // In the case of a sound clip this attribute has value 0
    this.width = 0;
};

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Represents a single file.
 *
 * name {DOMString} name of the file, without path information
 * fullPath {DOMString} the full path of the file, including the name
 * type {DOMString} mime type
 * lastModifiedDate {Date} last modified date
 * size {Number} size of the file in bytes
 */
window.MediaFile = function(name, localURL, type, lastModifiedDate, size){
    this.name = name || '';
    this.localURL = localURL || null;
    this.type = type || null;
    this.lastModified = lastModifiedDate || null;
    // For backwards compatibility, store the timestamp in lastModifiedDate as well
    this.lastModifiedDate = lastModifiedDate || null;
    this.size = size || 0;

    // These store the absolute start and end for slicing the file.
    this.start = 0;
    this.end = this.size;
};

/**
 * Request capture format data for a specific file and type
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 */
window.MediaFile.prototype.getFormatData = function(successCallback, errorCallback) {
    if(typeof successCallback === 'function') {
        successCallback();
    }
};

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * MediaFileData encapsulates format information of a media file.
 *
 * @param {DOMString} codecs
 * @param {long} bitrate
 * @param {long} height
 * @param {long} width
 * @param {float} duration
 */
window.MediaFileData = function(codecs, bitrate, height, width, duration){
    this.codecs = codecs || null;
    this.bitrate = bitrate || 0;
    this.height = height || 0;
    this.width = width || 0;
    this.duration = duration || 0;
};


// Cordova File Transfert Plugin
/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * FileTransfer uploads a file to a remote server.
 * @constructor
 */
window.FileTransfer = function() {
    this._id = 1;
    this.onprogress = null; // optional callback
};

/**
* Given an absolute file path, uploads a file on the device to a remote server
* using a multipart HTTP request.
* @param filePath {String}           Full path of the file on the device
* @param server {String}             URL of the server to receive the file
* @param successCallback (Function}  Callback to be invoked when upload has completed
* @param errorCallback {Function}    Callback to be invoked upon error
* @param options {FileUploadOptions} Optional parameters such as file name and mimetype
* @param trustAllHosts {Boolean} Optional trust all hosts (e.g. for self-signed certs), defaults to false
*/
FileTransfer.prototype.upload = function(filePath, server, successCallback, errorCallback, options, trustAllHosts) {
    if(typeof successCallback === 'function') {
        successCallback({
            response : 'http://img.verygoodmoment.com/event/50/party/101808/xl-2015-02-23-19:05:33.jpg',
            responseCode : 200,
            bytesSent : 10
        });   
    }
};

/**
 * Downloads a file form a given URL and saves it to the specified directory.
 * @param source {String}          URL of the server to receive the file
 * @param target {String}         Full path of the file on the device
 * @param successCallback (Function}  Callback to be invoked when upload has completed
 * @param errorCallback {Function}    Callback to be invoked upon error
 * @param trustAllHosts {Boolean} Optional trust all hosts (e.g. for self-signed certs), defaults to false
 * @param options {FileDownloadOptions} Optional parameters such as headers
 */
FileTransfer.prototype.download = function(source, target, successCallback, errorCallback, trustAllHosts, options) {
    if(typeof successCallback === 'function') {
        successCallback({});   
    }
};

/**
 * Aborts the ongoing file transfer on this object. The original error
 * callback for the file transfer will be called if necessary.
 */
FileTransfer.prototype.abort = function() {};

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * FileTransferError
 * @constructor
 */
window.FileTransferError = function(code, source, target, status, body, exception) {
    this.code = code || null;
    this.source = source || null;
    this.target = target || null;
    this.http_status = status || null;
    this.body = body || null;
    this.exception = exception || null;
};

window.FileTransferError.FILE_NOT_FOUND_ERR = 1;
window.FileTransferError.INVALID_URL_ERR = 2;
window.FileTransferError.CONNECTION_ERR = 3;
window.FileTransferError.ABORT_ERR = 4;
window.FileTransferError.NOT_MODIFIED_ERR = 5;


