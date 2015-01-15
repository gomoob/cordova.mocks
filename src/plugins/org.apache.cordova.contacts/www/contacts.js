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
