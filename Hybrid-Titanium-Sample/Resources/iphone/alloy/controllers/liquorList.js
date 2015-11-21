function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId5.__transform["liquorName"] ? __alloyId5.__transform["liquorName"] : __alloyId5.get("liquorName"),
                liquorDescription: "undefined" != typeof __alloyId5.__transform["liquorDescription"] ? __alloyId5.__transform["liquorDescription"] : __alloyId5.get("liquorDescription")
            });
            rows.push(__alloyId7);
            showLiquorDetail ? __alloyId7.addEventListener("click", showLiquorDetail) : __defers["__alloyId7!click!showLiquorDetail"] = true;
        }
        $.__views.__alloyId4.setData(rows);
    }
    function showLiquorDetail(event) {
        var selectedLiquor = event.source;
        var args = {
            liquorName: selectedLiquor.title,
            liquorDescription: selectedLiquor.liquorDescription
        };
        var liquorDetailView = Alloy.createController("liquorDetails", args).getView();
        $.liquorList.openWindow(liquorDetailView);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "liquorList";
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
    Alloy.Collections.instance("liquors");
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        title: "My Liquors",
        id: "__alloyId3"
    });
    $.__views.__alloyId4 = Ti.UI.createTableView({
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    var __alloyId8 = Alloy.Collections["liquors"] || liquors;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    $.__views.liquorList = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId3,
        id: "liquorList"
    });
    $.__views.liquorList && $.addTopLevelView($.__views.liquorList);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var myLiquors = Alloy.Collections.liquors;
    var gin = Alloy.createModel("liquors", {
        liquorName: "Gin",
        liquorDescription: "Gin is a spirit made of juniper berries."
    });
    myLiquors.add(gin);
    gin.save();
    var rum = Alloy.createModel("liquors", {
        liquorName: "Rum",
        liquorDescription: "Rum is a distilled liquid made of juniper berries."
    });
    myLiquors.add(rum);
    rum.save();
    var tequilla = Alloy.createModel("liquors", {
        liquorName: "Tequilla",
        liquorDescription: "Tequilla is a spirit made of blue agave."
    });
    myLiquors.add(tequilla);
    tequilla.save();
    var vodka = Alloy.createModel("liquors", {
        liquorName: "Vodka",
        liquorDescription: "Vodka is a colorless liquid."
    });
    myLiquors.add(vodka);
    vodka.save();
    __defers["__alloyId7!click!showLiquorDetail"] && __alloyId7.addEventListener("click", showLiquorDetail);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;