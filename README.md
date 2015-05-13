# Cordova.Mocks

[![Travis Build Status](http://img.shields.io/travis/gomoob/cordova.mocks.svg?style=flat)](https://travis-ci.org/gomoob/cordova.mocks)
[![Coverage Status](https://img.shields.io/coveralls/gomoob/cordova.mocks.svg?branch=master&style=flat)](https://coveralls.io/r/gomoob/cordova.mocks?branch=master)

Easy to use Apache Cordova / Adobe Phonegap Mocks.

Cordova.Mocks is a collection of mock objects used to emulate Apache Cordova / Adobe Phonegap core features and plugin 
features outside a real device and with a standard browser.

## Installation 

The easiest way to use the library is to pull it with [Bower](http://bower.io/) by adding the following dependency 
inside your `bower.json` file.

```
{
    ...
    "devDependencies": {
        ...
        "cordova.mocks" : "~0.1",
        ...
    }
    ...
}
```

## Configuration

## Cordova Events Simulation mode

The library allows to enable a "Device Buttons simulation mode", this allows you to simulate Cordova events directly 
inside your browser (see https://cordova.apache.org/docs/en/4.0.0/cordova_events_events.md.html). 

To enable it open a console and enters `cordova.setSimulateDeviceButtons(true)`.

```
cordova.setSimulateDeviceButtons(true);
cordova.mocks.js:46 Cordova mocks - device buttons simulation mode on.
cordova.mocks.js:47 Be careful, the following keys are mapped to actions : 
cordova.mocks.js:48  - Space key : Simulate a Cordova "pause" / "resume" event.
cordova.mocks.js:49  - "+"   key : Simulate a Cordova "volumeupbutton" event.
cordova.mocks.js:50  - "-"   key : Simulate a Cordova "volumedownbutton" event.
cordova.mocks.js:51  - "B"   key : Simulate a Cordova "backbutton" event.
cordova.mocks.js:52  - "C"   key : Simulate a Cordova "startcallbutton" / "endcallbutton" event.
cordova.mocks.js:53  - "M"   key : Simulate a Cordova "menubutton" / "menubutton" event.
cordova.mocks.js:54  - "S"   key : Simulate a Cordova "menubutton" / "searchbutton" event.
```

To disable it open a console and enters `cordova.setSimulateDeviceButtons(false)`. 

```
cordova.setSimulateDeviceButtons(false);
Cordova mocks - device buttons simulation mode off.
Cordova mocks - you can now used the keyboard normally again.
```