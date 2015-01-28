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
