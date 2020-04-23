// ==UserScript==
// @name        Quicker Luck
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/url
// @grant       none
// @version     0.0.1
// @author      li-yuening
// @description Auto redirect to `I'm feeling lucky` target page.
// @run-at      document-start
// ==/UserScript==

var url = location.href
var luckyRegex = /^https:\/\/www.google.com\/url\?q=(.*)/
var isLucky = luckyRegex.test(url)
if (isLucky) {
    var target = RegExp.$1
    location.href = target
}
