/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/


/**
 * The Capture interface exposes an interface to the camera and microphone of the hosting device.
 */
function Capture() {
    this.supportedAudioModes = [];
    this.supportedImageModes = [];
    this.supportedVideoModes = [];
}

/**
 * Launch audio recorder application for recording audio clip(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureAudioOptions} options
 */
Capture.prototype.captureAudio = function(successCallback, errorCallback, options){
    if(typeof successCallback === 'function') {
        var mediaFiles = [],
            mediaFile = {
                name: "capturedvideo.MOV",
                localURL: "cdvfile://localhost/temporary/capture-T0x14d4fcb0.tmp.8XSTQO/capturedvideo.MOV",
                type: "video/quicktime",
                lastModifiedDate: 1401295725000,
                size: 201139,
                start: 0,
                end: 0,
                fullPath: "/private/var/mobile/Applications/4D0C764E-4299-495B-8E5A-E322ACBD4138/tmp/capture-T0x14d4fcb0.tmp.8XSTQO/capturedvideo.MOV"
            };
        
        mediaFiles.push(mediaFile);
        
        successCallback(mediaFiles);   
    }
};

/**
 * Launch camera application for taking image(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureImageOptions} options
 */
Capture.prototype.captureImage = function(successCallback, errorCallback, options){
    if(typeof successCallback === 'function') {
        
        var mediaFiles = [],
        mediaFile = {
            name: "presentation.jpeg",
            localURL: "http://s3-eu-west-1.amazonaws.com/verygoodmoment/event/53/description/presentation.jpeg",
            type: "video/quicktime",
            lastModifiedDate: 1401295725000,
            size: 201139,
            start: 0,
            end: 0,
            fullPath: "http://s3-eu-west-1.amazonaws.com/verygoodmoment/event/53/description/presentation.jpeg"
        };
        
        mediaFiles.push(mediaFile);
        
        successCallback(mediaFiles); 
    }
};

/**
 * Launch device camera application for recording video(s).
 *
 * @param {Function} successCB
 * @param {Function} errorCB
 * @param {CaptureVideoOptions} options
 */
Capture.prototype.captureVideo = function(successCallback, errorCallback, options){
    if(typeof successCallback === 'function') {

        var mediaFiles = [],
        mediaFile = {
            name: "capturedvideo.MOV",
            localURL: "cdvfile://localhost/temporary/capture-T0x14d4fcb0.tmp.8XSTQO/capturedvideo.MOV",
            type: "video/quicktime",
            lastModifiedDate: 1401295725000,
            size: 201139,
            start: 0,
            end: 0,
            fullPath: "/private/var/mobile/Applications/4D0C764E-4299-495B-8E5A-E322ACBD4138/tmp/capture-T0x14d4fcb0.tmp.8XSTQO/capturedvideo.MOV"
        };
        
        mediaFiles.push(mediaFile);
        
        successCallback();   
    }
};

if (!navigator.device) {
    navigator.device = {};
}
navigator.device.capture = new Capture();