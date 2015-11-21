var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            liquorName: "text",
            liquorDescription: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "liquors"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("liquors", exports.definition, []);

collection = Alloy.C("liquors", exports.definition, model);

exports.Model = model;

exports.Collection = collection;