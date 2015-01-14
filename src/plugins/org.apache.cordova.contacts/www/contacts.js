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
        
    },
    
    /**
     * This function picks contact from phone using contact picker UI
     * @returns new Contact object
     */
    pickContact: function (successCB, errorCB) {
        
    }

};
