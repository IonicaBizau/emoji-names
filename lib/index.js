"use strict";

let emojis = require("emoji-name-map");

module.exports = Object.keys(emojis.emoji);
emojis = null;
