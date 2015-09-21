/**
 * Mock version of the 'org.apache.cordova.dialogs' plugin.
 * 
 * @author Simon BAUDRY (simon.baudry@gomoob.com)
 * @see https://github.com/apache/cordova-plugin-dialogs
 */
function Notification() {}

/**
 * Open a native alert dialog, with a customizable title and button text.
 *
 * @param {String} message              Message to print in the body of the alert
 * @param {Function} completeCallback   The callback that is called when user clicks on a button.
 * @param {String} title                Title of the alert dialog (default: Alert)
 * @param {String} buttonLabel          Label of the close button (default: OK)
 */
Notification.prototype.alert = function(message, completeCallback, title, buttonLabel) {
    completeCallback(2);
};

/**
 * Open a native confirm dialog, with a customizable title and button text.
 * The result that the user selects is returned to the result callback.
 *
 * @param {String} message              Message to print in the body of the alert
 * @param {Function} resultCallback     The callback that is called when user clicks on a button.
 * @param {String} title                Title of the alert dialog (default: Confirm)
 * @param {Array} buttonLabels          Array of the labels of the buttons (default: ['OK', 'Cancel'])
 */
Notification.prototype.confirm = function(message, resultCallback, title, buttonLabels) {
    resultCallback(2);
};

/**
 * Open a native prompt dialog, with a customizable title and button text.
 * The following results are returned to the result callback:
 *  buttonIndex     Index number of the button selected.
 *  input1          The text entered in the prompt dialog box.
 *
 * @param {String} message              Dialog message to display (default: "Prompt message")
 * @param {Function} resultCallback     The callback that is called when user clicks on a button.
 * @param {String} title                Title of the dialog (default: "Prompt")
 * @param {Array} buttonLabels          Array of strings for the button labels (default: ["OK","Cancel"])
 * @param {String} defaultText          Textbox input value (default: empty string)
 */
Notification.prototype.prompt = function(message, resultCallback, title, buttonLabels, defaultText) {
    resultCallback(2);
};

/**
 * Causes the device to beep.
 * On Android, the default notification ringtone is played "count" times.
 *
 * @param {Integer} count       The number of beeps.
 */
Notification.prototype.beep = function(count) {};

navigator.notification = new Notification();
