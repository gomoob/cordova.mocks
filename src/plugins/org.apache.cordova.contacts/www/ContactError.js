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
