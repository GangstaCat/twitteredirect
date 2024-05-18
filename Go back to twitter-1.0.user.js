// ==UserScript==
// @name         Go back to twitter
// @namespace    idkbro.com
// @version      1.0
// @description  redirects to twitter if youre on x
// @author       GangstaCat
// @match        https://x.com/*
// @icon         https://pbs.twimg.com/media/GN4QpGFWkAA2WD1?format=jpg&name=small
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    url = url.replace(/(https:\/\/)x/gi, "https://twitter");
    window.location.href = url;
})();