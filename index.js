const electron = require("electron");

const { app, BrowserWindow } = electron;

let mainWindow, tray;

app.on("ready", () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: { backgroundThrottling: false }
  });
});
