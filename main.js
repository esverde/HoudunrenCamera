const { app, BrowserWindow } = require("electron");
const path = require("path");

app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 300,
        alwaysOnTop: true,
        x: 1000,
        y: 100,
    });

    console.log(__dirname);

    // mainWindow.webContents.openDevTools();

    mainWindow.loadFile(path.resolve(__dirname, "index.html"));
});
