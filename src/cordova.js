window = typeof window === 'undefined' ? {} : window;
window.cordova = typeof window.cordova === 'undefined' ? {} : window.cordova;

window.cordova.exec = function (success, fail, className, methodName, paras) {
    if (success !== null) {
        success();
    }
};
