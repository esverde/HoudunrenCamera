const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 600,
        height: 600,
        x: 1000,
        y: 100,
        alwaysOnTop: true,
        frame: false,
        transparent: true,
    });
    mainWindow.setAspectRatio(1);
    mainWindow.loadURL("http://localhost:5173/");
};

app.whenReady().then(() => {
    // mainWindow.webContents.openDevTools();
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform != "darwin") app.quit();
});

app.on("activate", () => {
    createWindow();
});
