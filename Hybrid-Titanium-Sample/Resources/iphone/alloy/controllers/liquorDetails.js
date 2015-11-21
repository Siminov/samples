function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "liquorDetails";
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
    $.__views.liquorDetails = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "Liquor Detail",
        id: "liquorDetails"
    });
    $.__views.liquorDetails && $.addTopLevelView($.__views.liquorDetails);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.liquorDetails.add($.__views.__alloyId0);
    $.__views.titleLabel = Ti.UI.createLabel({
        left: 20,
        height: 20,
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        top: 10,
        text: "Brand",
        id: "titleLabel"
    });
    $.__views.__alloyId0.add($.__views.titleLabel);
    $.__views.title = Ti.UI.createLabel({
        left: 20,
        height: 20,
        id: "title"
    });
    $.__views.__alloyId0.add($.__views.title);
    $.__views.descriptionLabel = Ti.UI.createLabel({
        left: 20,
        height: 20,
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        top: 10,
        text: "Description",
        id: "descriptionLabel"
    });
    $.__views.__alloyId0.add($.__views.descriptionLabel);
    $.__views.description = Ti.UI.createLabel({
        left: 20,
        height: 20,
        id: "description"
    });
    $.__views.__alloyId0.add($.__views.description);
    $.__views.historyLabel = Ti.UI.createLabel({
        left: 20,
        height: 20,
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        top: 10,
        text: "History",
        id: "historyLabel"
    });
    $.__views.__alloyId0.add($.__views.historyLabel);
    $.__views.history = Ti.UI.createLabel({
        left: 20,
        height: 20,
        text: "By the 11th century, Italian monks were flavoring crudely distilled spirits with juniper berries. During the Black Death, this drink was used, although ineffectively, as a remedy. As the science of distillation advanced from the Middle Ages into the Renaissance period, juniper was one of many botanicals employed by virtue of its perfume, flavour, and purported medicinal propertie.",
        id: "history"
    });
    $.__views.__alloyId0.add($.__views.history);
    $.__views.alcoholLabel = Ti.UI.createLabel({
        left: 20,
        height: 20,
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        top: 10,
        text: "Alcohol Content",
        id: "alcoholLabel"
    });
    $.__views.__alloyId0.add($.__views.alcoholLabel);
    $.__views.alcohol = Ti.UI.createLabel({
        left: 20,
        height: 20,
        text: "Gin has a minimum alcohol content of 40 percent in the US (80 proof).",
        id: "alcohol"
    });
    $.__views.__alloyId0.add($.__views.alcohol);
    $.__views.linkLabel = Ti.UI.createLabel({
        left: 20,
        height: 20,
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        top: 10,
        text: "Link",
        id: "linkLabel"
    });
    $.__views.__alloyId0.add($.__views.linkLabel);
    $.__views.link = Ti.UI.createLabel({
        left: 20,
        height: 20,
        text: "http://en.wikipedia.org/wiki/Gin",
        id: "link"
    });
    $.__views.__alloyId0.add($.__views.link);
    $.__views.brandsLabel = Ti.UI.createLabel({
        left: 20,
        height: 20,
        font: {
            fontSize: "18",
            fontWeight: "bold"
        },
        top: 10,
        text: "Brands",
        id: "brandsLabel"
    });
    $.__views.__alloyId0.add($.__views.brandsLabel);
    $.__views.brands = Ti.UI.createLabel({
        left: 20,
        height: 20,
        text: "The+Botanist",
        id: "brands"
    });
    $.__views.__alloyId0.add($.__views.brands);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.liquorName || "Default Title";
    $.description.text = args.liquorDescription || "Default author";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;