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
