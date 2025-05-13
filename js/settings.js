// moyu/js/settings.js
const { app } = require('electron');
const path = require('path');
const fs = require('fs');

const settingsFilePath = path.join(app.getPath('userData'), 'settings.json');

function saveSettings(settings) {
    fs.writeFileSync(settingsFilePath, JSON.stringify(settings, null, 2));
}

function loadSettings() {
    try {
        const data = fs.readFileSync(settingsFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return {};
    }
}

module.exports = {
    saveSettings,
    loadSettings
};