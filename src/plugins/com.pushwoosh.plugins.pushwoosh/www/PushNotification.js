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
