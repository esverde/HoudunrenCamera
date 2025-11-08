const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        width: 300,
        height: 300,
        alwaysOnTop: true,
        x: 1000,
        y: 100,
    });

    mainWindow.loadFile(path.resolve(__dirname, "index.html"));
};

app.whenReady().then(() => {
    // mainWindow.webContents.openDevTools();
    createWindow();

    app.on("window-all-closed", () => {
        if (process.platform != "darwin") app.quit();
    });

    app.on("activate", () => {
        createWindow();
    });
});
