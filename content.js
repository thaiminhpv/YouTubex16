
// ==UserScript==
// @name         Youtube x16 speed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @match        https://www.youtube-nocookie.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// ==/UserScript==




(function () {
    const DEFAULT_SPEED = 1;
    let mapSpeed = { // hold shift key and press 1 -> 9 -> []\\
//        '|': 16,
//        '}': 14,
//        '{': 10,
//        '+': 8,
//        '_': 6,
//        ')': 5.5,
//        '(': 5,
//        '*': 4.5,
//        '&': 4,
//        '^': 3.5,
//        '%': 3,
//        '$': 2.5,
//        '#': 2,
//        '@': 1.5,
//        '!': 1,

        '|': 16,
        '}': 12,
        '{': 8,
        '+': 5,
        '_': 4,
        ')': 3.5,
        '(': 3,
        '*': 2.75,
        '&': 2.5,
        '^': 2.25,
        '%': 2,
        '$': 1.75,
        '#': 1.5,
        '@': 1.25,
        '!': 1,
    }

    setTimeout(function () {
        document.addEventListener('keypress', (e) => {
            let speed = null;
            if ((speed = mapSpeed[e.key]) !== undefined) {
                let x = document.querySelector('video')
                x.playbackRate = speed
            }
        });
        document.addEventListener('keypress', (e) => {
            if (e.key == "z") { //remove ads
                try { document.getElementsByClassName('ytp-ad-skip-button ytp-button')[0].click(); } catch (e) { };
                try { document.getElementsByClassName('ytp-button ytp-collapse')[0].click(); } catch (e) { };
                document.getElementsByClassName('ytp-ad-overlay-close-button')[0].click();
            } else if (e.key == 'q') { //quality
                document.getElementsByClassName('ytp-button ytp-settings-button')[0].click()
                setTimeout(() => { [...document.getElementsByClassName('ytp-menuitem-content')].slice(-1).pop().click() }, 200)
                setTimeout(() => { [...document.getElementsByClassName('ytp-panel-menu')].slice(-1).pop().children[0].click() }, 400)
            }
        });
    }, 1000);
})();

