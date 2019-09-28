"use strict";
exports.__esModule = true;
/**
 * Import npm package
*/
var express = require("express");
/**
 * ***Class App***
 * **This class instance of express aplication**
 */
var App = /** @class */ (function () {
    function App() {
        this.app = express();
    }
    App.prototype.listen = function () {
        this.app.listen(process.env.PORT || 3000, function () {
            console.log("App is listen on port: 3000"); //TODO change to doenv variables
        });
    };
    App.prototype.getServer = function () {
        return this.app;
    };
    return App;
}());
exports["default"] = App;
//# sourceMappingURL=app.js.map