/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.open();

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    open: function() {

        var options = {
            zoom: 'no',
            toolbartranslucent: 'no',
            toolbarposition: 'bottom',
            closebuttoncaption: 'close',
            navigationbuttoncolor: '#FFFFFF',
            location: 'no',
            EnableViewPortScale: 'yes',
            clearcache: 'yes',
            cleardata: 'yes',
            closebuttoncolor: '#cd9a59',
            presentationstyle: 'pagesheet'
            //presentationstyle: "fullscreen"
        
          };

        options = Object.keys(options)
        .map(function (key) { return key + "=" + options[key]; })
        .join(',');          

        // Comment line below, to prove that's it's buggy after sliding
        var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', options);
    }

};

app.initialize();