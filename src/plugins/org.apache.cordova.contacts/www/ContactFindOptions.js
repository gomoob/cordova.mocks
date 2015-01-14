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
