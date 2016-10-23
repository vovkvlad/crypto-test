(function () {
    'use strict';

    document.addEventListener("DOMContentLoaded", function () {
        // Fix Apple prefix if needed
        if (window.crypto && !window.crypto.subtle && window.crypto.webkitSubtle) {
            window.crypto.subtle = window.crypto.webkitSubtle;  // Won't work if subtle already exists
        }

        if (!window.crypto || !window.crypto.subtle) {
            alert("Your current browser does not support the Web Cryptography API! This page will not work.");
            return;
        }

        debugger;
        var keyPair;

        var generateButton = document.getElementById('generateKeyPairBtn');

        generateButton.addEventListener('click', function () {
            return window.crypto.subtle.generateKey({
                    name: 'RSA-OAEP',
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([ 1, 0, 1 ]),
                    hash: { name: 'SHA-256' }
                },
                true,   // can extract it later if we want
                [ "encrypt", "decrypt" ]).then(function (key) {
                keyPair = key;
                return key;
            });
        })
    });
})();