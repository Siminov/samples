function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showLiquorList() {
        var args = arguments[0] || {};
        var liquorList = Alloy.createController("liquorList", args).getView();
        liquorList.open();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.login = Ti.UI.createView({
        top: "10",
        layout: "vertical",
        id: "login"
    });
    $.__views.index.add($.__views.login);
    $.__views.username = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: 10,
        left: 20,
        right: 20,
        height: 40,
        id: "username",
        hintText: "Username..."
    });
    $.__views.login.add($.__views.username);
    $.__views.password = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top: 10,
        left: 20,
        right: 20,
        height: 40,
        id: "password",
        hintText: "Password..."
    });
    $.__views.login.add($.__views.password);
    $.__views.insertBookButton = Ti.UI.createButton({
        title: "Login",
        id: "insertBookButton"
    });
    $.__views.login.add($.__views.insertBookButton);
    showLiquorList ? $.__views.insertBookButton.addEventListener("click", showLiquorList) : __defers["$.__views.insertBookButton!click!showLiquorList"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.insertBookButton!click!showLiquorList"] && $.__views.insertBookButton.addEventListener("click", showLiquorList);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;